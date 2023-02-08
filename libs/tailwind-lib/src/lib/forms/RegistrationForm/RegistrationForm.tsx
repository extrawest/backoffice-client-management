import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Form, Formik } from "formik";
import { validateShema } from "./RegistrationForm.schema";
import type { RegistrationFormProps } from "./RegistrationForm.types";
import { LockIcon, UserIcon } from "../../icons";
import { AppRouteEnum } from "../../types";
import { FormikField } from "../../components/common/FormikField/FormikField";
import { Button } from "../../components/common/Button/Button";
import { TypographyEnum } from "../../types/typography";
import { Link } from "../../components/common/Link/Link";
import { Typography } from "../../components/common/Typography/Typography";

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
				isSubmitting, touched, errors
			}) => (
				<Form className="w-full flex flex-col items-center justify-center">
						<div
							className="w-full flex flex-col items-center justify-center p-0"
						>
							<div className="flex items-center justify-between gap-2.5">
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
								placeholder={lastNameText}
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
							<FormikField
								id="password"
								name="confirmPassword"
								placeholder="*********"
								type="password"
								hasError={Boolean(errors.password && touched.password)}
								error={errors.password}
								startAdornment={<LockIcon />}
								endAdornment
							/>
						</div>
						<Button
							submitType
							extraClasses="mb-2"
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
