import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { FormikHelpers } from "formik";
import { LoginForm, Values } from "../../forms/LoginForm";
import { useTypedDispatch, useTypedSelector } from "../../store";
import { AppRouteEnum } from "../../types";
import { styles } from "./LoginContainer.styles";
import {
	auth,
	getDoc,
	firestore,
	doc,
	setDoc
} from "@mono-redux-starter/firebase";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { updateIsLoggedIn, updateManager } from "@mono-redux-starter/redux";
import { Manager } from "@mono-redux-starter/shared/types";
import { Google } from "@mui/icons-material";

export const LoginContainer: FC = () => {
	const navigate = useNavigate();
	const dispatch = useTypedDispatch();

	const { managerInfo } = useTypedSelector(state => state.authSlice);
	const initialValuesLogin = {
		email: "",
		password: ""
	};

	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	] = useSignInWithEmailAndPassword(auth);

	const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

	const onSubmit = async (
		values: Values, form: FormikHelpers<Values>
	) => {
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
		<Box
			component="div"
			sx={styles.pageWrapper}
		>
			<LoginForm
				initialValues={initialValuesLogin}
				onSubmit={onSubmit}
				isLoading={false}
			/>
			<IconButton
				onClick={handleLoginViaGoogle}
			>
				<Google />
			</IconButton>
		</Box>
	);
};
