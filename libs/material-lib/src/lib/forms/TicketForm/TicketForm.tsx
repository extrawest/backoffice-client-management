import { FC } from "react";
import { useIntl } from "react-intl";
import {
	Box,
	Typography
} from "@mui/material";
import {
	Form,
	Formik,
	FormikHelpers
} from "formik";
import { FormFieldText } from "../../components/common/FormFieldText/FormFieldText";
import Button from "../../components/common/Button/Button";
import { validateShema } from "./TicketForm.schema";
import type { TicketFormProps, TicketValues } from "./TicketForm.types";
import { UserIcon } from "../../icons";
import { commonFormStyles } from "../commonForm.styles";
import { initialValues } from "./TicketForm.initialValue";
import { FormSelect } from "../../components/common/FormSelect";
import { PriorityEnum } from "@mono-redux-starter/shared/types";
import { SelectInputProps } from "../../components/common/FormSelect/FormSelect.types";

export const TicketForm: FC<TicketFormProps> = ({
	isLoading,
	onSubmit,
	processedClients
}) => {
	const intl = useIntl();

	const ticketNameText = intl.formatMessage({
		id: "ticketName"
	});

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

	const handleSetField = (
		field: string, setFieldValue: FormikHelpers<TicketValues>["setFieldValue"]
	): SelectInputProps["onChange"] => (e) => {
		setFieldValue(
			field,
			e.target.value
		);
	};

	return (
		<Formik
			initialValues={initialValues}
			validateOnBlur={false}
			validationSchema={validateShema}
			onSubmit={onSubmit}
		>
			{({
				isSubmitting,
				setFieldValue,
				values,
				errors
			}) => (
				<Form
					className="dark"
				>
					<Box
						sx={commonFormStyles["formWrapper"]}
					>
						<Box
							component="div"
							sx={commonFormStyles["pageContent"]}
						>
							<Typography
								sx={commonFormStyles["title"]}
								variant="h5"
							>
								{intl.formatMessage({
									id: "addNewTicket",
									defaultMessage: "Add New Ticket"
								})}
							</Typography>
							<FormFieldText
								type="text"
								name="name"
								sx={commonFormStyles["textInput"]}
								startIcon={<UserIcon />}
								placeholder={ticketNameText}
								variant="filled"
								color="primary"
							/>
							<FormSelect
								data={processedClients}
								value={values["client"]}
								placeholder={"client"}
								input={"client"}
								onChange={handleSetField(
									"client",
									setFieldValue
								)}
							/>
							<FormSelect
								data={processedPriority()}
								value={values["priority"]}
								placeholder={"priority"}
								input={"priority"}
								onChange={handleSetField(
									"priority",
									setFieldValue
								)}
							/>
						</Box>
						<Button
							color="primary"
							disabled={isSubmitting}
							fullWidth
							type="submit"
							variant="contained"
							data-testid="submitBtn"
							isLoading={isLoading}
							sx={commonFormStyles["submitButton"]}
						>
							{intl.formatMessage({
								id: "template.submit",
								defaultMessage: "Submit"
							})}
						</Button>
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default TicketForm;
