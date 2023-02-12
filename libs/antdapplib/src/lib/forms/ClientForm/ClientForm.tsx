/* eslint-disable react/no-unknown-property */
import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { validateShema } from "./ClientForm.schema";
import type { ClientFormProps } from "./ClientForm.types";
import { UserIcon } from "../../icons";
import { initialValues } from "./ClientForm.initialValue";
import {
	Button,
	Col,
	Divider,
	Form,
	Input,
	Row
} from "antd";
import { formStyles } from "../commonForms.styles";

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
		<Form
			onFinish={onSubmit}
			style={formStyles.form}
		>
			<Row
				align="middle"
				justify="space-between"
			>
				<Col span={11}>
					<Form.Item
						name="firstName"
						rules={[{ required: true, message: "Required" }]}
					>

						<Input
							type="text"
							placeholder={firstNameText}
							prefix={<UserIcon />}
						/>
					</Form.Item>
				</Col>
				<Col span={11}>
					<Form.Item
						name="lastName"
						rules={[{ required: true, message: "Required" }]}
					>

						<Input
							type="text"
							placeholder={lastNameText}
							prefix={<UserIcon />}
						/>
					</Form.Item>
				</Col>
			</Row>
			<Form.Item
				name="email"
				rules={[{ required: true, message: "Required" }]}
			>

				<Input
					type="email"
					placeholder={emailText}
					prefix={<UserIcon />}
				/>
			</Form.Item>
			<Form.Item
				name="date"
				rules={[{ required: true }]}

			>
				<Input
					type="date"
					placeholder={dateText}
					prefix={<UserIcon />}
				/>
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

export default ClientForm;
