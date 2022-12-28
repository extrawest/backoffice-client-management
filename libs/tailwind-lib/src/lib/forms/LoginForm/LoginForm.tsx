import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Form, Formik } from "formik";
import { validateShema } from "./LoginForm.schema";
import type { LoginFormProps } from "./LoginForm.types";
import { FormikField } from "../../components/common/FormikField/FormikField";

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
			// validateOnBlur={false}
			validationSchema={validateShema}
			onSubmit={onSubmit}
		>
			{({errors, touched, }) => (
				<Form>
					<FormikField
						type="text"
						id="email"
						name="email"
						placeholder={loginText}
						hasError={Boolean(errors.email && touched.email)}
						error={errors.email}
					/>
					<FormikField
						id="password"
						name="password"
						placeholder="*********"
						type="password"
						hasError={Boolean(errors.password && touched.password)}
						error={errors.password}
					/>

					<button type="submit">
						<FormattedMessage id="template.login"/>
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
