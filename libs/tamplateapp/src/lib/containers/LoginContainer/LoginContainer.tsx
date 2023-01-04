import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { FormikHelpers } from "formik";
import { LoginForm, Values } from "../../forms/LoginForm";
import { useTypedDispatch } from "../../store";
import { AppRouteEnum } from "../../types";
import { styles } from "./LoginContainer.styles";
import {
	auth,
	getDoc,
	firestore,
	doc
} from "@mono-redux-starter/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { updateIsLoggedIn } from "@mono-redux-starter/redux";

export const LoginContainer: FC = () => {
	const navigate = useNavigate();
	const dispatch = useTypedDispatch();
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
			console.log(snapshot.data());

			dispatch(updateIsLoggedIn(true));
			navigate(AppRouteEnum.DASHBOARD);
			form.setSubmitting(false);
		}
	};

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
		</Box>
	);
};
