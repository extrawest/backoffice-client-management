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
import { Typography } from "../../components/common/Typography/Typography";
import { TypographyEnum } from "../../types/typography";
import { FormattedMessage } from "react-intl";
import { IconButton } from "../../components/common/IconButton/IconButton";
import { GoogleIcon } from "../../icons";
import { Manager } from "@mono-redux-starter/shared/types";

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
		const result = await signInWithEmailAndPassword(
			values.email,
			values.password
		);
		if(result){
			dispatch(updateIsLoggedIn(true));
			navigate(AppRouteEnum.DASHBOARD);
			form.setSubmitting(false);
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
		<div
			className="h-100vh flex flex-col justify-center items-center bg-background.paper max-w-lg mx-auto"
		>
			<div className="flex flex-col justify-center items-center gap-5 mb-10 lead">
				<Typography
					type={TypographyEnum.H1}
					extraClasses="max-w-sm leading-tight"
				>
					<FormattedMessage id="template.loginToAccount"/>
				</Typography>
				<Typography type={TypographyEnum.DESCRIPTION}>
					<FormattedMessage id="template.loginDescription"/>
				</Typography>
			</div>
			<LoginForm
				initialValues={initialValuesLogin}
				onSubmit={onSubmit}
				isLoading={false}
			/>
			<IconButton
				onClick={handleLoginViaGoogle}
				extraClasses="mt-2"
			>
				<GoogleIcon />
			</IconButton>
		</div>
	);
};
