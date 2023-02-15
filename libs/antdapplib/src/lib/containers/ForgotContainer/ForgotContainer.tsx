import { auth } from "@mono-redux-starter/firebase";
import { useShowSnackBarMessage } from "@mono-redux-starter/shared/hooks";
import { FC } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { AppRouteEnum } from "../../types";
import { FormattedMessage } from "react-intl";
import { ForgotForm, Values } from "../../forms/ForgotForm";
import {
	Button,
	Col,
	Row
} from "antd";
import { Content } from "antd/es/layout/layout";
import { TypographyTitle } from "../../components/common/TypographyTitle/TypographyTitle";
import { containerStyle } from "../containerStyle";

export const ForgotContainer: FC = () => {
	const navigate = useNavigate();
	const initialValuesForgot = {
		email: "",
	};
	const [
		sendPasswordResetEmail,
		,
		error
	] = useSendPasswordResetEmail(auth);

	const actionCodeSettings = {
		url: window.location + AppRouteEnum.LOGIN,
	};

	useShowSnackBarMessage(
		!!error,
		"Error",
		"error"
	);

	const onSubmit = async (values: Values) => {
		const result = await sendPasswordResetEmail(
			values.email,
			actionCodeSettings
		);
		if(result){
			navigate(AppRouteEnum.LOGIN);
		}
	};

	return (
		<Content style={containerStyle.root}>
			<Row
				align="middle"
				justify="center"
			>
				<Col
					span={24}
				>
					<Row
						gutter={[8, 32]}
						align="middle"
						justify="center"
					>
						<Col span={24}>
							<TypographyTitle
								level={1}
								textAlign="center"
							>
								<FormattedMessage id="template.resetTitle"/>
							</TypographyTitle>
						</Col>
					</Row>
				<ForgotForm
					initialValues={initialValuesForgot}
					onSubmit={onSubmit}
					isLoading={false}
				/>
				<Row
					align="middle"
					justify="center"
				>
					<Button
						type="link"
						href={AppRouteEnum.LOGIN}
					>
						<FormattedMessage id="template.login" />
					</Button>
				</Row>
				</Col>
			</Row>
		</Content>
	);
};
