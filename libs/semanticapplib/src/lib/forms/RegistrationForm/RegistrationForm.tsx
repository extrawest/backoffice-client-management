import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Form, Formik } from "formik";
import { validateShema } from "./RegistrationForm.schema";
import type { RegistrationFormProps } from "./RegistrationForm.types";
import { LockIcon, UserIcon } from "../../icons";
import { AppRouteEnum } from "../../types";
import { FormikField } from "../../components/common/FormikField/FormikField";
import { Button } from "../../components/common/Button/Button";
import { Link } from "../../components/common/Link/Link";
import { Typography } from "../../components/common/Typography/Typography";
import { FormikPasswordField } from "../../components/common/FormikPasswordField/FormikPasswordField";
import { commonFormStyles } from "../formStyles";

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
				touched, errors
			}) => (
				<Form style={commonFormStyles.wrapper}>
					<div style={commonFormStyles.spaceBetweenWrapper}>
						<FormikField
							type="text"
							id="firstName"
							name="firstName"
							placeholder={firstNameText}
							hasError={Boolean(errors.email && touched.email)}
							error={errors.email}
							startAdornment={<UserIcon />}
						/>
						<FormikField
							type="text"
							id="lastName"
							name="lastName"
							placeholder={lastNameText}
							hasError={Boolean(errors.email && touched.email)}
							error={errors.email}
							startAdornment={<UserIcon />}
						/>
					</div>
					<FormikField
						type="text"
						id="email"
						name="email"
						placeholder={emailText}
						hasError={Boolean(errors.email && touched.email)}
						error={errors.email}
						startAdornment={<UserIcon />}
					/>
					<FormikPasswordField
						id="password"
						name="password"
						placeholder="*********"
						type="password"
						hasError={Boolean(errors.password && touched.password)}
						error={errors.password}
						startAdornment={<LockIcon />}
						endAdornment
					/>
					<FormikPasswordField
						id="password"
						name="confirmPassword"
						placeholder="*********"
						type="password"
						hasError={Boolean(errors.password && touched.password)}
						error={errors.password}
						startAdornment={<LockIcon />}
						endAdornment
					/>
					<Button
						type="submit"
					>
						{intl.formatMessage({
							id: "template.signUp",
							defaultMessage: "Go"
						})}
					</Button>
					<Link to={AppRouteEnum.LOGIN}>
						<Typography>
							<FormattedMessage id="template.login" />
						</Typography>
					</Link>
				</Form>
			)}
		</Formik>
	);
};

export default RegistrationForm;
