import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import { LoginForm, Values } from "../../forms/LoginForm";
import { useTypedDispatch } from "../../store";
import { AppRouteEnum } from "../../types";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "@mono-redux-starter/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { updateIsLoggedIn } from "@mono-redux-starter/redux";
import { useShowSnackBarMessage } from "@mono-redux-starter/shared/hooks";
import { Typography } from "../../components/common/Typography/Typography";
import { TypographyEnum } from "../../types/typography";
import { FormattedMessage } from "react-intl";

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
		</div>
	);
};
