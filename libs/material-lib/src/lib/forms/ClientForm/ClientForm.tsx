import { FC } from "react";
import { useIntl } from "react-intl";
import {
	Box,
	TextField,
	Typography
} from "@mui/material";
import {
	Form,
	Formik
} from "formik";
import { FormFieldText } from "../../components/common/FormFieldText/FormFieldText";
import Button from "../../components/common/Button/Button";
import { validateShema } from "./ClientForm.schema";
import type { ClientFormProps } from "./ClientForm.types";
import { UserIcon } from "../../icons";
import { commonFormStyles } from "../commonForm.styles";
import { initialValues } from "./ClientForm.initialValue";
import { DatePicker } from "@mui/x-date-pickers";

export const ClientForm: FC<ClientFormProps> = ({
	isLoading,
	onSubmit
}) => {
	const intl = useIntl();

	const emailText = intl.formatMessage({
		id: "template.email",
		defaultMessage: "Email"
	});
	const lastNameText = intl.formatMessage({
		id: "template.lastName",
		defaultMessage: "Last Name"
	});
	const firstNameText = intl.formatMessage({
		id: "template.firstName",
		defaultMessage: "First Name"
	});
	const dateText = intl.formatMessage({
		id: "template.age",
		defaultMessage: "Age"
	});
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
									id: "addNewClient",
									defaultMessage: "Add New Client"
								})}
							</Typography>
							<Box sx={commonFormStyles["fieldsWrap"]}>
								<FormFieldText
									type="text"
									name="firstName"
									sx={commonFormStyles["textInput"]}
									startIcon={<UserIcon />}
									placeholder={firstNameText}
									variant="filled"
									color="primary"
								/>
								<FormFieldText
									type="text"
									name="lastName"
									sx={commonFormStyles["textInput"]}
									startIcon={<UserIcon />}
									placeholder={lastNameText}
									variant="filled"
									color="primary"
								/>
							</Box>
							<FormFieldText
								type="email"
								name="email"
								sx={commonFormStyles["textInput"]}
								title={""}
								startIcon={<UserIcon />}
								placeholder={emailText}
								variant="filled"
								color="primary"
							/>
							<Box sx={commonFormStyles["wrapperDateInput"]}>
								<DatePicker
									value={values["date"]}
									inputFormat="DD.MM.YYYY"
									mask="__.__.____"
									InputProps={{
										placeholder: dateText,
										startAdornment: <UserIcon />,
									}}
									onChange={(newValue) => {
										newValue && setFieldValue(
											"date",
											new Date(newValue)
										);
									}}
									renderInput={(params) => (
										<TextField
											{...params}
											helperText={errors["date"]}
										/>
									)}
								/>
							</Box>
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

export default ClientForm;
