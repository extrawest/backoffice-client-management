import { PriorityEnum } from "@mono-redux-starter/shared/types";
import {
	Divider, SelectChangeEvent, Typography, Box
} from "@mui/material";
import { Form, Formik } from "formik";
import { FC, FormEvent } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { commonFormStyles } from "../../../forms/formStyles";
import { UserIcon } from "../../../icons";
import { Button } from "../../common/Button/Button";
import { FormikSelect } from "../../common/FormikSelect/FormikSelect";
import { filterFormStyles } from "./FilterForm.styles";
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
				<Form style={commonFormStyles.wrapper}>
					<FormikSelect
						data={processedPriority()}
						placeholder={"priority"}
						name={"priority"}
						hasError={Boolean(errors.priority && touched.priority)}
						error={errors.priority}
						startAdornment={<UserIcon className="overflow-visible"/>}
					/>
					<Divider orientation="horizontal" />
					<div style={filterFormStyles.buttonsWrapper}>
						<Button
							type="submit"
							onClick={handleClose}
						>
							<FormattedMessage id="clear"/>
						</Button>
						<Button
							type="submit"
						>
							<FormattedMessage id="template.submit"/>
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
};
