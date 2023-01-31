import { auth } from "@mono-redux-starter/firebase";
import { useShowSnackBarMessage } from "@mono-redux-starter/shared/hooks";
import { FormikHelpers } from "formik";
import { FC } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { ForgotForm } from "../../forms/ForgotForm/ForgotForm";
import { Values } from "../../forms/ForgotForm";
import { AppRouteEnum } from "../../types";
import { Typography } from "../../components/common/Typography/Typography";
import { TypographyEnum } from "../../types/typography";
import { FormattedMessage } from "react-intl";

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
					<FormattedMessage id="template.resetTitle"/>
				</Typography>
			</div>
			<ForgotForm
				initialValues={initialValuesForgot}
				onSubmit={onSubmit}
				isLoading={false}
			/>
		</div>
	);
};
