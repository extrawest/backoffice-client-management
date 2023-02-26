/* eslint-disable react/no-unknown-property */
import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import {
	Form,
	Formik
} from "formik";
import { validateShema } from "./ClientForm.schema";
import type { ClientFormProps } from "./ClientForm.types";
import { UserIcon } from "../../icons";
import { initialValues } from "./ClientForm.initialValue";
import { FormikField } from "../../components/common/FormikField/FormikField";
import { Button } from "../../components/common/Button/Button";
import { commonFormStyles } from "../formStyles";
import { Container } from "semantic-ui-react";
import { clientFormStyles } from "./ClientForm.styles";

export const ClientForm: FC<ClientFormProps> = ({
	isLoading,
	onSubmit
}) => {
	const intl = useIntl();

	const emailText = intl.formatMessage({
		id: "template.email",
		defaultMessage: "Email"
	});
	const lastNameText = intl.formatMessage({
		id: "template.lastName",
		defaultMessage: "Last Name"
	});
	const firstNameText = intl.formatMessage({
		id: "template.firstName",
		defaultMessage: "First Name"
	});
	const dateText = intl.formatMessage({
		id: "template.age",
		defaultMessage: "Age"
	});
	return (
		<Formik
			initialValues={initialValues}
			validateOnBlur={false}
			validationSchema={validateShema}
			onSubmit={onSubmit}
		>
			{({
				isSubmitting,
				setFieldValue,
				values,
				errors,
				touched
			}) => (
				<Form style={commonFormStyles.wrapper}>
					<Container text>
						<FormikField
							type="text"
							name="firstName"
							placeholder={firstNameText}
							error={errors.firstName}
							startAdornment={<UserIcon />}
						/>
						<FormikField
							type="text"
							name="lastName"
							placeholder={lastNameText}
							error={errors.lastName}
							startAdornment={<UserIcon />}
						/>
						<FormikField
							type="email"
							name="email"
							placeholder={emailText}
							error={errors.email}
							startAdornment={<UserIcon />}
						/>
						<div style={clientFormStyles.dateButtonWrapper}>
							<input
								type="date"
								style={clientFormStyles.dateButtonInput}
								placeholder={dateText}
								onChange={(e) => setFieldValue(
								"date",
								e.target.value
								)}
							/>
						</div>
						<Button type="submit">
							<FormattedMessage id="template.submit"/>
						</Button>
					</Container>
				</Form>
			)}
		</Formik>
	);
};

export default ClientForm;
