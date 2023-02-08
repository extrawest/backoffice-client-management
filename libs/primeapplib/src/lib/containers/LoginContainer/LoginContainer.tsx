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
import { Typography } from "../../components/common/Typography/Typography";
import { TypographyEnum } from "../../types/typography";
import { FormattedMessage } from "react-intl";
import { IconButton } from "../../components/common/IconButton/IconButton";
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
		<div
			className="h-screen flex flex-column justify-content-center align-items-center bg-background max-w-30rem mx-auto"
		>
			<div className="flex flex-column justify-content-center align-items-center gap-2 mb-4 lead">
				<Typography
					type={TypographyEnum.H1}
					extraClasses="max-w-24rem mb-2"
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
				icon="pi pi-google"
			/>
		</div>
	);
};
