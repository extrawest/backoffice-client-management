import {
	FC,
	useState
} from "react";
import { FormattedMessage, useIntl } from "react-intl";
import type { LoginFormProps } from "./LoginForm.types";
import {
	LockIcon,
	UserIcon
} from "../../icons";
import {
	Button,
	Checkbox,
	Col,
	Divider,
	Form,
	Input,
	Row,
} from "antd";
import Link from "antd/es/typography/Link";
import { AppRouteEnum } from "../../types";

export const LoginForm: FC<LoginFormProps> = ({
	initialValues,
	isLoading,
	onSubmit
}) => {
	const intl = useIntl();
	const [checked, setChecked] = useState(false);

	const loginText = intl.formatMessage({
		id: "template.email",
		defaultMessage: "Email"
	});
	const form = Form.useForm();

	return (
		<Form
			onFinish={onSubmit}
		>
			<Form.Item
				name="email"
				rules={[{ required: true, message: "Required" }]}
			>

				<Input
					type="email"
					placeholder={intl.formatMessage({id: "template.email"})}
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
			<Row>
				<Col
					flex={1}
				>
					<Checkbox>
						<FormattedMessage id="template.remember" />
					</Checkbox>
				</Col>
				<Col
					flex={1}
					className="flex justify-end"
				>
					<Button
						type="link"
						href={AppRouteEnum.FORGOT}
					>
						<FormattedMessage id="forgot" />
					</Button>
				</Col>
			</Row>
			<Divider dashed/>
			<Row align="middle" justify="center">
				<Button
					type="primary"
					htmlType="submit"
				>
					<FormattedMessage id="template.login" />
				</Button>
			</Row>
		</Form>
	);
};

export default LoginForm;
