import { auth } from "@mono-redux-starter/firebase";
import { useShowSnackBarMessage } from "@mono-redux-starter/shared/hooks";
import { FormikHelpers } from "formik";
import { FC } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { AppRouteEnum } from "../../types";
import { Typography } from "../../components/common/Typography/Typography";
import { TypographyEnum } from "../../types/typography";
import { FormattedMessage } from "react-intl";
import { ForgotForm, Values } from "../../forms/ForgotForm";

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
			className="h-screen flex flex-column justify-content-center align-items-center bg-background max-w-30rem mx-auto"
		>
			<div className="flex flex-column justify-content-center align-items-center gap-2 mb-4 lead">
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
