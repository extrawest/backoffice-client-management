import { FC } from "react";
import { useIntl } from "react-intl";
import {
	Box,
	Typography
} from "@mui/material";
import { Form, Formik } from "formik";
import { FormFieldText } from "../../components/common/FormFieldText/FormFieldText";
import Button from "../../components/common/Button/Button";
import { validateShema } from "./RegistrationForm.schema";
import type { RegistrationFormProps } from "./RegistrationForm.types";
import { LockIcon, UserIcon } from "../../icons";
import Link from "../../components/common/Link/Link";
import { AppRouteEnum } from "../../types";
import { commonFormStyles } from "../commonForm.styles";

export const RegistrationForm: FC<RegistrationFormProps> = ({
	initialValues,
	isLoading,
	onSubmit
}) => {
	const intl = useIntl();

	const emailText = intl.formatMessage({
		id: "template.email",
		defaultMessage: "Email"
	});
	const firstNameText = intl.formatMessage({
		id: "template.lastName",
		defaultMessage: "Last Name"
	});
	const lastNameText = intl.formatMessage({
		id: "template.firstName",
		defaultMessage: "First Name"
	});

	return (
		<Formik
			initialValues={initialValues}
			validateOnBlur={false}
			validationSchema={validateShema}
			onSubmit={onSubmit}
		>
			{({
				isSubmitting
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
								variant="h1"
							>
								{intl.formatMessage({
									id: "template.signUpToAccount",
									defaultMessage: "SignUp"
								})}
							</Typography>
							<Typography
								sx={commonFormStyles["subtitle"]}
								variant="body2"
							>
								{intl.formatMessage({
									id: "template.loginDescription"
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
								startIcon={<UserIcon />}
								placeholder={emailText}
								variant="filled"
								color="primary"
							/>
							<FormFieldText
								type="password"
								name="password"
								sx={commonFormStyles["textInput"]}
								startIcon={<LockIcon />}
								placeholder={intl.formatMessage({
									id: "template.password",
									defaultMessage: "Password"
								})}
								variant="filled"
								color="primary"
							/>
							<FormFieldText
								type="password"
								name="confirmPassword"
								sx={commonFormStyles["textInput"]}
								startIcon={<LockIcon />}
								placeholder={intl.formatMessage({
									id: "template.password",
									defaultMessage: "Password"
								})}
								variant="filled"
								color="primary"
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
								id: "template.signUp",
								defaultMessage: "Go"
							})}
						</Button>
						<Link href={AppRouteEnum.LOGIN}>
							<Typography
								variant="body1"
							>
								{intl.formatMessage({
									id: "template.login"
								})}
							</Typography>
						</Link>
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default RegistrationForm;
