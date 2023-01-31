import { FC, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Form, Formik } from "formik";
import { validateShema } from "./LoginForm.schema";
import type { LoginFormProps } from "./LoginForm.types";
import { FormikField } from "../../components/common/FormikField/FormikField";
import { Button } from "../../components/common/Button/Button";
import {
	LockIcon,
	UserIcon
} from "../../icons";
import { Checkbox } from "primereact/checkbox";
import { Link } from "../../components/common/Link/Link";
import { FormikPasswordField } from "../../components/common/FormikPasswordField/FormikPasswordField";

export const LoginForm: FC<LoginFormProps> = ({
	initialValues,
	isLoading,
	onSubmit
}) => {
	const intl = useIntl();
	const [checked, setChecked] = useState(false);

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
			{({errors, touched, values, setFieldValue, handleBlur}) => (
				<Form className="w-full flex flex-column align-items-center justify-content-center">
					<FormikField
						id="email"
						name="email"
						placeholder={loginText}
						startAdornment={<UserIcon />}
						value={values["email"]}
					/>
					<FormikPasswordField
						id="password"
						name="password"
						placeholder="*********"
						startAdornment={<LockIcon />}
						value={values["password"]}
					/>
					<div className="w-full flex justify-content-between align-items-center mb-2 px-4 py-2">
					<div className="flex align-items-center card gap-2">
						<label
							htmlFor="remember"
							className="ml-2"
						>
							<FormattedMessage id="template.remember"/>
						</label>
						<Checkbox
							className="border-1 border-solid border-grayscale-400 border-round-md flex align-items-center justify-content-center w-1-5rem h-1-5rem"
							inputId="remember"
							onChange={e => setChecked(e.checked)}
							checked={checked}
						/>
					</div>

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
