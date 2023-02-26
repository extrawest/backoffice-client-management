import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { FormikHelpers } from "formik";
import { AppRouteEnum } from "../../types";
import { styles } from "./RegistrationContainer.styles";
import {
	auth,
	firestore
} from "@mono-redux-starter/firebase";
import {
	useCreateUserWithEmailAndPassword,
	useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { useShowSnackBarMessage } from "@mono-redux-starter/shared/hooks";
import { RegistrationForm, Values } from "../../forms/RegistrationForm";
import { doc, setDoc } from "firebase/firestore";

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
		,
		,
		createUserError,
	] = useCreateUserWithEmailAndPassword(auth);

	const [sendEmailVerification] = useSendEmailVerification(auth);

	useShowSnackBarMessage(
		!!createUserError,
		"Error",
		"error"
	);
	const onSubmit = async (
		values: Values, form: FormikHelpers<Values>
	) => {
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
			form.setSubmitting(false);
		}
	};

	return (
		<Box
			component="div"
			sx={styles.pageWrapper}
		>
			<RegistrationForm
				initialValues={initialValuesSignUp}
				onSubmit={onSubmit}
				isLoading={false}
			/>
		</Box>
	);
};
