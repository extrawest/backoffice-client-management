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
import { FormikCalendar } from "../../components/common/FormikCalendar/FormikCalendar";

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
			{({values}) => (
				<Form className="w-full flex flex-column align-items-center justify-content-center">
						<div>
							<div className="flex aling-items-center justify-content-between gap-3">
								<FormikField
									id="firstName"
									name="firstName"
									placeholder={firstNameText}
									startAdornment={<UserIcon />}
									value={values["firstName"]}
								/>
								<FormikField
									id="lastName"
									name="lastName"
									placeholder={lastNameText}
									startAdornment={<UserIcon />}
									value={values["lastName"]}
								/>
							</div>
							<FormikField
								id="email"
								name="email"
								placeholder={emailText}
								startAdornment={<UserIcon />}
								value={values["email"]}
							/>
							<FormikCalendar
								placeholder={dateText}
								name="date"
							/>
						</div>
						<Button submitType>
							<FormattedMessage id="template.submit"/>
						</Button>
				</Form>
			)}
		</Formik>
	);
};

export default ClientForm;
