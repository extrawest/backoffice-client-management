import { PriorityEnum } from "@mono-redux-starter/shared/types";
import { Form, Formik } from "formik";
import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { UserIcon } from "../../../icons";
import { Button } from "../../common/Button/Button";
import { FormikSelect } from "../../common/FormikSelect/FormikSelect";
import { FilterFormProps } from "./FilterForm.types";

export const FilterForm: FC<FilterFormProps>= ({
	handleFilter,
	isFilterActive,
	handleClose,
	activePriority,
	setActivePriority
}) => {
	const processedPriority = () => {
		const data = Object.values(PriorityEnum).map((
			priority, index
		) => ({
			id: index,
			name: priority,
			value: priority
		}));
		return data;
	};

	const initialValue = {
		priority: ""
	};
	return (
		<Formik
			initialValues={initialValue}
			validateOnBlur={false}
			onSubmit={handleFilter}
		>
			{({
				isSubmitting,
				setFieldValue,
				values,
				errors,
				touched
			}) => (
				<Form
					className="dark w-full flex justify-center flex-col"
				>
      <div className="p-5">
				<FormikSelect
					data={processedPriority()}
					placeholder={"priority"}
					name={"priority"}
					hasError={Boolean(errors.priority && touched.priority)}
					error={errors.priority}
					startAdornment={<UserIcon className="overflow-visible"/>}
				/>
      </div>
			<span className="my-3 border-t-1 border-solid border-grayscale-400"/>
      <div className="flex justify-end items-center gap-1 py-2.5 px-5">
				<Button
					submitType
					extraClasses="rounded-lg border-1 border-solid border-grayscale-600 to-grayscale-200 from-grayscale-200 text-secondary-main"
					onClick={handleClose}
				>
					<FormattedMessage id="clear"/>
				</Button>
				<Button
					submitType
					extraClasses="rounded-lg"
				>
					<FormattedMessage id="template.submit"/>
				</Button>
      </div>
    </Form>
			)}
		</Formik>
	);
};
