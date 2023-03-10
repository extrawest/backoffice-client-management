import { FC, SyntheticEvent } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import {
	Form,
	Formik,
} from "formik";
import { validateShema } from "./TicketForm.schema";
import type { TicketFormProps } from "./TicketForm.types";
import { UserIcon } from "../../icons";
import { initialValues } from "./TicketForm.initialValue";
import { PriorityEnum } from "@mono-redux-starter/shared/types";
import { FormikField } from "../../components/common/FormikField/FormikField";
import { FormikSelect } from "../../components/common/FormikSelect/FormikSelect";
import { Button } from "../../components/common/Button/Button";
import { commonFormStyles } from "../formStyles";
import { Container, DropdownProps } from "semantic-ui-react";

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
			text: priority,
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
				<Form style={commonFormStyles.wrapper}>
					<Container text>
						<FormikField
							type="text"
							name="name"
							placeholder={ticketNameText}
							error={errors.name}
							startAdornment={<UserIcon />}
						/>
						<FormikSelect
							data={processedClients}
							placeholder={intl.formatMessage({id:"client"})}
							name={"client"}
							hasError={Boolean(errors.client && touched.client)}
							error={errors.client}
							handleChange={(
								e: SyntheticEvent<HTMLElement, Event>,
								data: DropdownProps
								) => setFieldValue(
								"client",
								data.value
							)}
							startAdornment={<UserIcon />}
						/>
						<FormikSelect
							data={processedPriority()}
							placeholder={intl.formatMessage({id:"priority"})}
							name={"priority"}
							hasError={Boolean(errors.priority && touched.priority)}
							error={errors.priority}
							handleChange={(
								e: SyntheticEvent<HTMLElement, Event>,
								data: DropdownProps
							) => setFieldValue(
								"priority",
								data.value
							)}
							startAdornment={<UserIcon/>}
						/>
					</Container>
					<Button type="submit">
						<FormattedMessage id="template.submit"/>
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default TicketForm;
