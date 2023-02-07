import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import {
	Form,
	Formik,
	FormikHandlers,
	FormikHelpers
} from "formik";
import { validateShema } from "./TicketForm.schema";
import type { TicketFormProps, TicketValues } from "./TicketForm.types";
import { UserIcon } from "../../icons";
import { initialValues } from "./TicketForm.initialValue";
import { PriorityEnum } from "@mono-redux-starter/shared/types";
import { FormikField } from "../../components/common/FormikField/FormikField";
import { FormikSelect } from "../../components/common/FormikSelect/FormikSelect";
import { Typography } from "../../components/common/Typography/Typography";
import { TypographyEnum } from "../../types/typography";
import { Button } from "../../components/common/Button/Button";
import { commonFormStyles } from "../formStyles";
import { Container } from "semantic-ui-react";

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
							hasError={Boolean(errors.name && touched.name)}
							error={errors.name}
							startAdornment={<UserIcon />}
						/>
						<FormikSelect
							data={processedClients}
							placeholder={intl.formatMessage({id:"client"})}
							name={"client"}
							hasError={Boolean(errors.client && touched.client)}
							error={errors.client}
							startAdornment={<UserIcon />}
						/>
						<FormikSelect
							data={processedPriority()}
							placeholder={intl.formatMessage({id:"priority"})}
							name={"priority"}
							hasError={Boolean(errors.priority && touched.priority)}
							error={errors.priority}
							startAdornment={<UserIcon/>}
						/>
					</Container>
					<Button submitType>
						<FormattedMessage id="template.submit"/>
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default TicketForm;
