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
import { Checkbox } from "../../components/common/Checkbox/Checkbox";
import { Link } from "../../components/common/Link/Link";

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
			{({errors, touched, }) => (
				<Form className="w-100% flex flex-col items-center justify-center">
					<FormikField
						type="text"
						id="email"
						name="email"
						placeholder={loginText}
						hasError={Boolean(errors.email && touched.email)}
						error={errors.email}
						startAdornment={<UserIcon />}
					/>
					<FormikField
						id="password"
						name="password"
						placeholder="*********"
						type="password"
						hasError={Boolean(errors.password && touched.password)}
						error={errors.password}
						startAdornment={<LockIcon />}
						endAdornment
					/>
					<div className="w-100% flex justify-between items-center mb-4 p-4">
						<Checkbox
							label={intl.formatMessage({id: "template.remember"})}
							name="forgot"
							id="forgotPass"
							onChange={(e) => console.log(e)}
						/>
						<Link to="/">
							<FormattedMessage id="forgot" />
						</Link>
					</div>
					<Button submitType>
						<FormattedMessage id="template.login"/>
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
