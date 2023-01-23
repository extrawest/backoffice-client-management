import { auth } from "@mono-redux-starter/firebase";
import { useShowSnackBarMessage } from "@mono-redux-starter/shared/hooks";
import { Box } from "@mui/material";
import { FormikHelpers } from "formik";
import { FC } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { ForgotForm } from "../../forms/ForgotForm/ForgotForm";
import { Values } from "../../forms/ForgotForm";
import { AppRouteEnum } from "../../types";
import { styles } from "./ForgotContainer.styles";

export const ForgotContainer: FC = () => {
	const navigate = useNavigate();
	const initialValuesForgot = {
		email: "",
	};
	const [
		sendPasswordResetEmail,
		sending,
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

	const onSubmit = async (
		values: Values, form: FormikHelpers<Values>
	) => {
		const result = await sendPasswordResetEmail(
			values.email,
			actionCodeSettings
		);
		if(result){
			console.log(result);
			navigate(AppRouteEnum.LOGIN);
			form.setSubmitting(false);
		}
	};

	return (
		<Box
			component="div"
			sx={styles.pageWrapper}
		>
			<ForgotForm
				initialValues={initialValuesForgot}
				onSubmit={onSubmit}
				isLoading={false}
			/>
		</Box>
	);
};
