import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import type { TicketFormProps } from "./TicketForm.types";
import { UserIcon } from "../../icons";
import { PriorityEnum } from "@mono-redux-starter/shared/types";
import {
	Button,
	Col,
	Divider,
	Form,
	Input,
	Row
} from "antd";
import { Select } from "../../components/common/Select/Select";
import { formStyles } from "../commonForms.styles";

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
		<Form
			onFinish={onSubmit}
			style={formStyles.form}
		>
			<Form.Item
				name="name"
				rules={[{ required: true, message: "Required" }]}
			>

				<Input
					type="name"
					placeholder={ticketNameText}
					prefix={<UserIcon />}
				/>
			</Form.Item>
			<Form.Item
				name="client"
				rules={[{ required: true }]}

			>
				<Select data={processedClients}/>
			</Form.Item>
			<Form.Item
				name="priority"
				rules={[{ required: true }]}
			>
				<Select data={processedPriority()} />
			</Form.Item>
			<Divider dashed/>
			<Row
				align="middle"
				justify="center"
			>
				<Button
					type="primary"
					htmlType="submit"
				>
					<FormattedMessage id="template.submit" />
				</Button>
			</Row>
		</Form>
	);
};

export default TicketForm;
