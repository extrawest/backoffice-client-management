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
				<Form className="w-full flex flex-column align-items-center justify-content-center">

						<div className="flex items-center justify-between gap-2.5">
							<FormikField
								type="text"
								id="firstName"
								name="firstName"
								placeholder={firstNameText}
								startAdornment={<UserIcon />}
							/>
							<FormikField
								type="text"
								id="lastName"
								name="lastName"
								placeholder={lastNameText}
								startAdornment={<UserIcon />}
							/>
						</div>
						<FormikField
							type="text"
							id="email"
							name="email"
							placeholder={emailText}
							startAdornment={<UserIcon />}
						/>
						<FormikField
							id="password"
							name="password"
							placeholder="*********"
							type="password"
							startAdornment={<LockIcon />}
						/>
						<FormikField
							id="password"
							name="confirmPassword"
							placeholder="*********"
							type="password"
							startAdornment={<LockIcon />}
						/>
					<Button
						submitType
						extraClasses="mb-2"
						label={intl.formatMessage({
							id: "template.signUp",
							defaultMessage: "Go"
						})}
					/>
					<Link to={AppRouteEnum.LOGIN}>
						<Typography>
							<FormattedMessage id="template.login" />
						</Typography>
					</Link>
    </Form>
		</Formik>
	);
};

export default RegistrationForm;
