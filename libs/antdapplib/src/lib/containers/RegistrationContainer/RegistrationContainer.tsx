import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { AppRouteEnum } from "../../types";
import {
	auth,
	firestore,
} from "@mono-redux-starter/firebase";
import {
	useCreateUserWithEmailAndPassword,
	useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { useShowSnackBarMessage } from "@mono-redux-starter/shared/hooks";
import { doc, setDoc } from "firebase/firestore";
import { FormattedMessage } from "react-intl";
import { RegistrationForm, Values } from "../../forms/RegistrationForm";
import { Content } from "antd/es/layout/layout";
import { containerStyle } from "../containerStyle";
import {
	Button, Col, Row
} from "antd";
import { TypographyTitle } from "../../components/common/TypographyTitle/TypographyTitle";
import { TypographyParagraph } from "../../components/common/TypographyParagraph/TypographyParagraph";

export const RegistrationContainer: FC = () => {
	const navigate = useNavigate();
	const initialValuesSignUp = {
		email: "",
		password: "",
		confirmPassword: "",
		firstName: "",
		lastName: ""
	};
	const [
		createUserWithEmailAndPassword,
		user,
		loading,
		createUserError,
	] = useCreateUserWithEmailAndPassword(auth);

	const [
		sendEmailVerification,
		sending,
		verificationError
	] = useSendEmailVerification(auth);

	useShowSnackBarMessage(
		!!createUserError,
		"Error",
		"error"
	);
	const onSubmit = async (values: Values) => {
		const result = await createUserWithEmailAndPassword(
			values.email,
			values.password
		);
		if(result?.user){
			await sendEmailVerification();
			setDoc(
				doc(
					firestore(),
					"managers",
					result.user.uid
				),
				{
					email: values.email,
					firstName: values.firstName,
					lastName: values.lastName,
					uid: result.user.uid,
				}
			);
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
						gutter={[8, 16]}
						align="middle"
						justify="center"
					>
						<Col span={24}>
							<TypographyTitle
								level={1}
								textAlign="center"
							>
								<FormattedMessage id="template.signUpToAccount"/>
							</TypographyTitle>
						</Col>
						<Col span={24}>
							<TypographyParagraph
									textAlign="center"
							>
								<FormattedMessage id="template.loginDescription"/>
							</TypographyParagraph>
						</Col>
					</Row>
				<RegistrationForm
					initialValues={initialValuesSignUp}
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
