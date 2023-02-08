import { PriorityEnum } from "@mono-redux-starter/shared/types";
import {
	Divider, SelectChangeEvent, Typography, Box
} from "@mui/material";
import { Form, Formik } from "formik";
import { FC, FormEvent } from "react";
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
			text: priority,
			value: priority
		}));
		return data;
	};

	const initialValue = {
		priority: ""
	};

	const handleChangeRole = (event: SelectChangeEvent<string>) => {
		setActivePriority(event.target.value);
	};

	const handleSubmit = () => {
		handleFilter({ priority: activePriority});
		isFilterActive(true);
		handleClose();
	};

	const handleClear = () => {
		setActivePriority("");
		handleFilter({ priority: "" });
		isFilterActive(false);
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
