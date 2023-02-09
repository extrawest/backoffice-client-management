import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import { LoginForm, Values } from "../../forms/LoginForm";
import { useTypedDispatch, useTypedSelector } from "../../store";
import { AppRouteEnum } from "../../types";
import { getAuth } from "firebase/auth";
import {
	doc,
	firebaseApp,
	firestore,
	getDoc,
	setDoc
} from "@mono-redux-starter/firebase";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { updateIsLoggedIn, updateManager } from "@mono-redux-starter/redux";
import { useShowSnackBarMessage } from "@mono-redux-starter/shared/hooks";
import { FormattedMessage } from "react-intl";
import { Manager } from "@mono-redux-starter/shared/types";
import {
	Button,
	Col, Divider, Row
} from "antd";
import { Content } from "antd/es/layout/layout";
import { containerStyle } from "../containerStyle";
import { TypographyTitle } from "../../components/common/TypographyTitle/TypographyTitle";
import { TypographyParagraph } from "../../components/common/TypographyParagraph/TypographyParagraph";
import { GoogleOutlined } from "@ant-design/icons";

export const LoginContainer: FC = () => {
	const navigate = useNavigate();
	const dispatch = useTypedDispatch();
	const initialValuesLogin = {
		email: "",
		password: ""
	};

	const auth = getAuth(firebaseApp);
	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	] = useSignInWithEmailAndPassword(auth);

	const { managerInfo } = useTypedSelector(state => state.authSlice);

	const [
		signInWithGoogle,
		googleUser,
		googleLoading,
		googleError
	] = useSignInWithGoogle(auth);

	useShowSnackBarMessage(
		!!error,
		"Error",
		"error"
	);

	const onSubmit = async (values: Values) => {
		const result = await signInWithEmailAndPassword(
			values.email,
			values.password
		);
		if(result){
			dispatch(updateIsLoggedIn(true));
			navigate(AppRouteEnum.DASHBOARD);
		}
	};

	const handleLoginViaGoogle = async () => {
		try{
			const result = await signInWithGoogle();
			if(result){
				const snapshot = await getDoc(doc(
					firestore(),
					"managers",
					result.user.uid
				));
				const data = {
					...snapshot.data(),
					photoUrl: result.user.photoURL
				};
				data && dispatch(updateManager(data as Manager));
				dispatch(updateIsLoggedIn(true));
				navigate(AppRouteEnum.DASHBOARD);
			}
		} catch(loginError) {
			console.log(loginError);
		}
	};

	useEffect(
		() => {
			if(googleUser?.user){
				const userName = googleUser.user.displayName?.split(/\s/);
				const data = {
					email: googleUser.user.email,
					firstName: userName?.shift(),
					lastName: userName?.join(" "),
					uid: googleUser.user.uid,
				};
				setDoc(
					doc(
						firestore(),
						"managers",
						googleUser.user.uid
					),
					data
				);
				data && dispatch(updateManager({
					...managerInfo,
					...data
				} as Manager));
			}
		},
		[googleUser?.user]
	);

	return (
		<Content style={containerStyle.root}>
			<Col
				span={12}
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
							<FormattedMessage id="template.loginToAccount"/>
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
				<LoginForm
					initialValues={initialValuesLogin}
					onSubmit={onSubmit}
					isLoading={false}
				/>
				<Divider
					dashed
					type="vertical"
				/>
				<Row
					align="middle"
					justify="center"
				>
					<Button
						type="link"
						href={AppRouteEnum.REGISTRATION}
					>
						<FormattedMessage id="template.signUp" />
					</Button>
				</Row>
				<Divider
					dashed
					type="vertical"
				/>
				<Row
					align="middle"
					justify="center"
				>
					<GoogleOutlined
						onClick={handleLoginViaGoogle}
						style={{ fontSize: "32px" }}
					/>
				</Row>
			</Col>
		</Content>
	);
};
