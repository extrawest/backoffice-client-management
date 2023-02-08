import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import {
	Form,
	Formik,
	FormikHandlers,
	FormikHelpers
} from "formik";
import { validateShema } from "./TicketForm.schema";
import type { TicketFormProps } from "./TicketForm.types";
import { UserIcon } from "../../icons";
import { initialValues } from "./TicketForm.initialValue";
import { PriorityEnum } from "@mono-redux-starter/shared/types";
import { FormikField } from "../../components/common/FormikField/FormikField";
import { FormikSelect } from "../../components/common/FormikSelect/FormikSelect";
import { Button } from "../../components/common/Button/Button";
import TreeNode from "primereact/treenode";

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
			{({errors, touched, values, setFieldValue, handleBlur}) => (
				<Form className="w-full flex flex-column align-items-center justify-content-center">
					<div>
						<FormikField
							id="name"
							name="name"
							placeholder={ticketNameText}
							startAdornment={<UserIcon />}
							value={values["name"]}
						/>
						<FormikSelect
							data={processedClients}
							placeholder={"client"}
							name={"client"}
							startAdornment={<UserIcon />}
						/>
						<FormikSelect
							data={processedPriority()}
							placeholder={"priority"}
							name={"priority"}
							startAdornment={<UserIcon/>}
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

export default TicketForm;
