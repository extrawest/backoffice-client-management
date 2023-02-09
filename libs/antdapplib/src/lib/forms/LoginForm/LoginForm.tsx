import {
	FC, useEffect, useState
} from "react";
import { FormattedMessage, useIntl } from "react-intl";
// import { Form, Formik } from "formik";
import { validateShema } from "./LoginForm.schema";
import type { LoginFormProps } from "./LoginForm.types";
// import { Button } from "../../components/common/Button/Button";
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
	FormProps,
	Input,
	Row,
} from "antd";
import { InputField } from "../../components/common/InputField/InputField";
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

	const handleSubmit: FormProps["onFinish"] = (val) => {
		console.log(val);
	};

	return (
		<Form
			onFinish={handleSubmit}
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
			<Form.Item wrapperCol={{span: 4, offset: 10}}>
				<Button
					type="primary"
					htmlType="submit"
				>
					<FormattedMessage id="template.submit" />
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
