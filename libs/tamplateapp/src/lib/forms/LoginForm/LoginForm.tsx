import { FC } from "react";
import { useIntl } from "react-intl";
import {
	Box,
	Checkbox,
	FormControlLabel,
	Typography
} from "@mui/material";
import { Form, Formik } from "formik";
import { FormFieldText } from "../../components/common/FormFieldText/FormFieldText";
import Button from "../../components/common/Button/Button";
import { validateShema } from "./LoginForm.schema";
import { loginStyles } from "./LoginForm.styles";
import type { LoginFormProps } from "./LoginForm.types";
import { LockIcon, UserIcon } from "../../icons";
import { CircleOutlined, CircleSharp } from "@mui/icons-material";
import { FormCheckbox } from "../../components/common/FormCheckbox";
import Link from "../../components/common/Link/Link";

export const LoginForm: FC<LoginFormProps> = ({
	initialValues,
	isLoading,
	onSubmit
}) => {
	const intl = useIntl();

	const loginText = intl.formatMessage({
		id: "template.email",
		defaultMessage: "Email"
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
						sx={loginStyles.formWrapper}
					>
						<Box
							component="div"
							sx={loginStyles.pageContent}
						>
							<Typography
								sx={loginStyles.title}
								variant="h1"
							>
								{intl.formatMessage({
									id: "template.loginToAccount",
									defaultMessage: "Log In"
								})}
							</Typography>
							<Typography
								sx={loginStyles.subtitle}
								variant="body2"
							>
								{intl.formatMessage({
									id: "template.loginDescription"
								})}
							</Typography>
							<FormFieldText
								type="email"
								name="email"
								sx={loginStyles.textInput}
								title={""}
								startIcon={<UserIcon />}
								placeholder={loginText}
								variant="filled"
								color="primary"
							/>
							<FormFieldText
								type="password"
								name="password"
								sx={loginStyles.textInput}
								title={""}
								startIcon={<LockIcon />}
								placeholder={intl.formatMessage({
									id: "template.password",
									defaultMessage: "Password"
								})}
								variant="filled"
								color="primary"
							/>
						</Box>
						<Box sx={loginStyles.actionsWrapper}>
							<FormCheckbox
								label={intl.formatMessage({
									id: "template.remember"
								})}
							/>
							<Link href="/">
								<Typography
									variant="body1"
								>
									{intl.formatMessage({
										id: "forgot"
									})}
								</Typography>
							</Link>
						</Box>
						<Button
							color="primary"
							disabled={isSubmitting}
							fullWidth
							type="submit"
							variant="contained"
							data-testid="submitBtn"
							isLoading={isLoading}
						>
							{intl.formatMessage({
								id: "template.login",
								defaultMessage: "Go"
							})}
						</Button>
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
