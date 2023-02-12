import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import type { ForgotFormProps } from "./ForgotForm.types";
import { UserIcon } from "../../icons";
import { AppRouteEnum } from "../../types";
import {
	Button,
	Divider,
	Form,
	Input,
	Row
} from "antd";

export const ForgotForm: FC<ForgotFormProps> = ({
	initialValues,
	isLoading,
	onSubmit
}) => {
	const intl = useIntl();

	const loginText = intl.formatMessage({
		id: "template.email",
		defaultMessage: "Email"
	});

	return (
		<Form
			onFinish={onSubmit}
		>
			<Form.Item
				name="email"
				rules={[{ required: true, message: "Required" }]}
			>

				<Input
					placeholder={intl.formatMessage({id: "template.email"})}
					prefix={<UserIcon />}
				/>
			</Form.Item>
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

export default ForgotForm;
