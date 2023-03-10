import { FC } from "react";
import { useIntl } from "react-intl";
import {
	Box,
	Typography
} from "@mui/material";
import { Form, Formik } from "formik";
import { FormFieldText } from "../../components/common/FormFieldText/FormFieldText";
import Button from "../../components/common/Button/Button";
import { validateShema } from "./ForgotForm.schema";
import type { ForgotFormProps } from "./ForgotForm.types";
import { UserIcon } from "../../icons";
import Link from "../../components/common/Link/Link";
import { AppRouteEnum } from "../../types";
import { commonFormStyles } from "../commonForm.styles";

export const ForgotForm: FC<ForgotFormProps> = ({
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
								variant="h5"
							>
								{intl.formatMessage({
									id: "template.resetTitle",
									defaultMessage: "Reset"
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
								id: "template.reset",
								defaultMessage: "Reset"
							})}
						</Button>
						<Link href={AppRouteEnum.LOGIN}>
							<Typography
								variant="body1"
							>
								{intl.formatMessage({
									id: "return"
								})}
							</Typography>
						</Link>
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default ForgotForm;
