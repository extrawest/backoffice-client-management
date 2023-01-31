import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import { AppRouteEnum } from "../../types";
import {
	auth,
	firestore,
	useCollection,
	collection
} from "@mono-redux-starter/firebase";
import {
	useCreateUserWithEmailAndPassword,
	useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { useShowSnackBarMessage } from "@mono-redux-starter/shared/hooks";
import { doc, setDoc } from "firebase/firestore";
import { Typography } from "../../components/common/Typography/Typography";
import { FormattedMessage } from "react-intl";
import { TypographyEnum } from "../../types/typography";
import { RegistrationForm, Values } from "../../forms/RegistrationForm";

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
		<div
			className="h-screen flex flex-col justify-center items-center bg-background.paper max-w-lg mx-auto"
		>
			<div className="flex flex-col justify-center items-center gap-5 mb-10 lead">
				<Typography
					type={TypographyEnum.H1}
					extraClasses="max-w-sm leading-tight"
				>
					<FormattedMessage id="template.signUpToAccount"/>
				</Typography>
				<Typography type={TypographyEnum.DESCRIPTION}>
					<FormattedMessage id="template.loginDescription"/>
				</Typography>
			</div>
			<RegistrationForm
				initialValues={initialValuesSignUp}
				onSubmit={onSubmit}
				isLoading={false}
			/>
		</div>
	);
};
