import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import type { RegistrationFormProps } from "./RegistrationForm.types";
import { LockIcon, UserIcon } from "../../icons";
import {
	Button,
	Col,
	Divider,
	Form,
	Input,
	Row
} from "antd";

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
		<Form
			onFinish={onSubmit}
		>
			<Row gutter={[8, 16]}>
				<Col
					flex={1}
				>
					<Form.Item
						name="firstName"
						rules={[{ required: true, message: "Required" }]}
					>
						<Input
							placeholder={emailText}
							prefix={<UserIcon />}
						/>
					</Form.Item>
				</Col>
				<Col
					flex={1}
				>
					<Form.Item
						name="lastName"
						rules={[{ required: true, message: "Required" }]}
					>

						<Input
							placeholder={firstNameText}
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
					placeholder={lastNameText}
					prefix={<UserIcon />}
				/>
			</Form.Item>
			<Form.Item
				name="password"
				rules={[{ required: true, message: "Required" }]}

			>
				<Input.Password
					placeholder={intl.formatMessage({id: "template.password"})}
					prefix={<LockIcon />}
				/>
			</Form.Item>
			<Form.Item
				name="confirmPassword"
				rules={[{ required: true, message: "Required" }]}

			>
				<Input.Password
					placeholder={intl.formatMessage({id: "template.password"})}
					prefix={<LockIcon />}
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
					<FormattedMessage id="template.signUp" />
				</Button>
			</Row>
		</Form>
	);
};

export default RegistrationForm;
