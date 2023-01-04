import { FC } from "react";
import { useIntl } from "react-intl";
import {
	Box,
	Typography
} from "@mui/material";
import { Form, Formik } from "formik";
import { FormFieldText } from "../../components/common/FormFieldText/FormFieldText";
import Button from "../../components/common/Button/Button";
import { validateShema } from "./LoginForm.schema";
import type { LoginFormProps } from "./LoginForm.types";
import { LockIcon, UserIcon } from "../../icons";
import { FormCheckbox } from "../../components/common/FormCheckbox";
import Link from "../../components/common/Link/Link";
import { AppRouteEnum } from "../../types";
import { commonFormStyles } from "../commonForm.styles";

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
						sx={commonFormStyles.formWrapper}
					>
						<Box
							component="div"
							sx={commonFormStyles.pageContent}
						>
							<Typography
								sx={commonFormStyles.title}
								variant="h1"
							>
								{intl.formatMessage({
									id: "template.loginToAccount",
									defaultMessage: "Log In"
								})}
							</Typography>
							<Typography
								sx={commonFormStyles.subtitle}
								variant="body2"
							>
								{intl.formatMessage({
									id: "template.loginDescription"
								})}
							</Typography>
							<FormFieldText
								type="email"
								name="email"
								sx={commonFormStyles.textInput}
								title={""}
								startIcon={<UserIcon />}
								placeholder={loginText}
								variant="filled"
								color="primary"
							/>
							<FormFieldText
								type="password"
								name="password"
								sx={commonFormStyles.textInput}
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
						<Box sx={commonFormStyles.actionsWrapper}>
							<FormCheckbox
								label={intl.formatMessage({
									id: "template.remember"
								})}
							/>
							<Link href={AppRouteEnum.FORGOT}>
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
							sx={commonFormStyles.submitButton}
						>
							{intl.formatMessage({
								id: "template.login",
								defaultMessage: "Go"
							})}
						</Button>
						<Link href={AppRouteEnum.REGISTRATION}>
							<Typography
								variant="body1"
							>
								{intl.formatMessage({
									id: "template.signUp"
								})}
							</Typography>
						</Link>
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
