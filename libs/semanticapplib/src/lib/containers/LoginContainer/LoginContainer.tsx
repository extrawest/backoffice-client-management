import { FC } from "react";
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
	getDoc
} from "@mono-redux-starter/firebase";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { updateIsLoggedIn, updateManager } from "@mono-redux-starter/redux";
import { useShowSnackBarMessage } from "@mono-redux-starter/shared/hooks";
import { FormattedMessage } from "react-intl";
import {
	Container,
	Divider,
	Header
} from "semantic-ui-react";
import { containerStyle } from "../containerStyle";
import { Typography } from "../../components/common/Typography/Typography";
import { TypographyEnum } from "../../types/typography";
import { Manager } from "@mono-redux-starter/shared/types";
import { IconButton } from "../../components/common/IconButton/IconButton";

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

	const onSubmit = async (
		values: Values, form: FormikHelpers<Values>
	) => {
		try{
			const result = await signInWithEmailAndPassword(
				values.email,
				values.password
			);
			if(result){
				const snapshot = await getDoc(doc(
					firestore(),
					"managers",
					result.user.uid
				));
				const data = snapshot.data();
				data && dispatch(updateManager(data as Manager));
				dispatch(updateIsLoggedIn(true));
				navigate(AppRouteEnum.DASHBOARD);
				form.setSubmitting(false);
			}
		} catch (loginError) {
			console.log(loginError);
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

	return (
		<Container
			fluid
			style={{
				...containerStyle.root
			}}
		>
			<Container text>
				<Container text>
					<Header
						textAlign="center"
						as="h1"
					>
						<FormattedMessage id="template.loginToAccount"/>
					</Header>
					<Typography
						type={TypographyEnum.DESCRIPTION}
					>
						<FormattedMessage id="template.loginDescription"/>
					</Typography>
				</Container>
				<Divider hidden/>
				<LoginForm
					initialValues={initialValuesLogin}
					onSubmit={onSubmit}
					isLoading={false}
				/>
				<Divider hidden/>
				<IconButton
					icon="google"
					onClick={handleLoginViaGoogle}
				/>
			</Container>
		</Container>
	);
};
