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
				<Form
					className="dark w-full flex justify-center"
				>
					<div
						className="flex flex-col items-center justify-center px-8 w-full"
					>
						<div
							className="w-full flex flex-col items-center justify-center p-0 mb-5 gap-5"
						>
							<div className="grid grid-cols-2 gap-3">
								<FormikField
									type="text"
									name="firstName"
									placeholder={firstNameText}
									hasError={Boolean(errors.firstName && touched.firstName)}
									error={errors.firstName}
									startAdornment={<UserIcon />}
								/>
								<FormikField
									type="text"
									name="lastName"
									placeholder={lastNameText}
									hasError={Boolean(errors.lastName && touched.lastName)}
									error={errors.lastName}
									startAdornment={<UserIcon />}
								/>
							</div>
							<FormikField
								type="email"
								name="email"
								placeholder={emailText}
								hasError={Boolean(errors.email && touched.email)}
								error={errors.email}
								startAdornment={<UserIcon />}
							/>
							<div className="relative w-full">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<svg
										aria-hidden="true"
										className="w-5 h-5 text-gray-500 dark:text-gray-400"
										fill="grayscale-200"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<input
									type="date"
									className="bg-gray-50 border border-grayscale-600 text-grayscale-600 text-sm rounded-50 block w-full pl-10 p-2.5 outline-none"
									placeholder={dateText}
									onChange={(e) => setFieldValue(
									"date",
									e.target.value
									)}
								/>
							</div>
						</div>
						<Button submitType>
							<FormattedMessage id="template.submit"/>
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default ClientForm;
