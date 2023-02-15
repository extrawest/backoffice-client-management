import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import {
	Form,
	Formik
} from "formik";
import { validateShema } from "./TicketForm.schema";
import type { TicketFormProps } from "./TicketForm.types";
import { UserIcon } from "../../icons";
import { initialValues } from "./TicketForm.initialValue";
import { PriorityEnum } from "@mono-redux-starter/shared/types";
import { FormikField } from "../../components/common/FormikField/FormikField";
import { FormikSelect } from "../../components/common/FormikSelect/FormikSelect";
import { Button } from "../../components/common/Button/Button";

export const TicketForm: FC<TicketFormProps> = ({
	isLoading,
	onSubmit,
	processedClients
}) => {
	const intl = useIntl();

	const ticketNameText = intl.formatMessage({
		id: "ticketName"
	});

	const processedPriority = () => {
		const data = Object.values(PriorityEnum).map((
			priority, index
		) => ({
			id: index,
			name: priority,
			value: priority
		}));
		return data;
	};

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
						className="flex flex-col items-center justify-center px-8 w-3/4"
					>
						<div
							className="w-full flex flex-col items-center justify-center p-0 mb-5 gap-5"
						>
							<FormikField
								type="text"
								name="name"
								placeholder={ticketNameText}
								hasError={Boolean(errors.name && touched.name)}
								error={errors.name}
								startAdornment={<UserIcon />}
							/>
							<FormikSelect
								data={processedClients}
								placeholder={"client"}
								name={"client"}
								hasError={Boolean(errors.client && touched.client)}
								error={errors.client}
								startAdornment={<UserIcon />}
							/>
							<FormikSelect
								data={processedPriority()}
								placeholder={"priority"}
								name={"priority"}
								hasError={Boolean(errors.priority && touched.priority)}
								error={errors.priority}
								startAdornment={<UserIcon/>}
							/>
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

export default TicketForm;
