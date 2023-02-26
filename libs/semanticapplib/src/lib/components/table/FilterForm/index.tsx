import { PriorityEnum } from "@mono-redux-starter/shared/types";
import { Divider } from "@mui/material";
import {
	Form, Formik, FormikConfig
} from "formik";
import {
	FC,
	SyntheticEvent
} from "react";
import { FormattedMessage } from "react-intl";
import { DropdownProps } from "semantic-ui-react";
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

	const handleSubmit: FormikConfig<{priority: string}>["onSubmit"] = (values) => {
		setActivePriority(values.priority);
		handleFilter(values);
		isFilterActive(true);
		handleClose();
	};

	const handleClear = () => {
		setActivePriority("");
		handleFilter({ priority: "" });
		isFilterActive(false);
		handleClose();
	};
	return (
		<Formik
			initialValues={initialValue}
			validateOnBlur={false}
			onSubmit={handleSubmit}
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
						handleChange={(
							e: SyntheticEvent<HTMLElement, Event>,
							data: DropdownProps
						) => setFieldValue(
							"priority",
							data.value
						)}
						startAdornment={<UserIcon className="overflow-visible"/>}
					/>
					<Divider orientation="horizontal" />
					<div style={filterFormStyles.buttonsWrapper}>
						<Button
							type="submit"
							onClick={handleClear}
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
