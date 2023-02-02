import { PriorityEnum } from "@mono-redux-starter/shared/types";
import { Form, Formik } from "formik";
import TreeNode from "primereact/treenode";
import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
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
	const intl = useIntl();
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
				<Form className="w-full flex flex-column align-items-center justify-content-center">
					<div className="p-5">
						<FormikSelect
							data={processedPriority()}
							placeholder={"priority"}
							name={"priority"}
							startAdornment={<UserIcon className="overflow-visible"/>}
						/>
					</div>
					<div className="flex justify-content-end align-items-center gap-1 py-2.5 px-5">
						<Button
							extraClasses="rounded-lg border-1 border-solid border-gray-600 to-gray-200 from-gray-200 text-secondary-main"
							onClick={handleClose}
							label={intl.formatMessage({id: "clear"})}
						/>
						<Button
							submitType
							extraClasses="rounded-lg"
							label={intl.formatMessage({id: "template.submit"})}
						/>
					</div>
				</Form>
			)}
		</Formik>
	);
};
