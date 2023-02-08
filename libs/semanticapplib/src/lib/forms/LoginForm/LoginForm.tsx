import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Form, Formik } from "formik";
import { validateShema } from "./LoginForm.schema";
import type { LoginFormProps } from "./LoginForm.types";
import { FormikField } from "../../components/common/FormikField/FormikField";
import { Button } from "../../components/common/Button/Button";
import {
	EyeIcon,
	LockIcon,
	UserIcon
} from "../../icons";
import { Link } from "../../components/common/Link/Link";
import { AppRouteEnum } from "../../types";
import { Typography } from "../../components/common/Typography/Typography";
import { TypographyEnum } from "../../types/typography";
import { FormikPasswordField } from "../../components/common/FormikPasswordField/FormikPasswordField";
import { commonFormStyles } from "../formStyles";
import { Checkbox, Container } from "semantic-ui-react";

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
			{({errors, touched }) => (
				<Form style={commonFormStyles.wrapper}>
					<FormikField
						type="text"
						id="email"
						name="email"
						placeholder={loginText}
						startAdornment={<UserIcon />}
					/>
					<FormikPasswordField
						id="password"
						name="password"
						placeholder="*********"
						type="password"
						startAdornment={<LockIcon />}
					/>
					<Container text style={commonFormStyles.spaceBetweenWrapper}>
						<Checkbox
							label={intl.formatMessage({id: "template.remember"})}
							name="forgot"
							id="forgotPass"
							onChange={(e) => console.log(e)}
						/>
						<Link to={AppRouteEnum.FORGOT}>
							<FormattedMessage id="forgot" />
						</Link>
					</Container>
					<Button type="submit">
						<FormattedMessage id="template.login"/>
					</Button>
					<Link to={AppRouteEnum.REGISTRATION}>
						<Typography>
							<FormattedMessage id="template.signUp" />
						</Typography>
					</Link>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
