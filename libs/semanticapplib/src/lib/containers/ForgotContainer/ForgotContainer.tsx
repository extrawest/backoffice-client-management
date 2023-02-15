import { auth } from "@mono-redux-starter/firebase";
import { useShowSnackBarMessage } from "@mono-redux-starter/shared/hooks";
import { FormikHelpers } from "formik";
import { FC } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { ForgotForm } from "../../forms/ForgotForm/ForgotForm";
import { Values } from "../../forms/ForgotForm";
import { AppRouteEnum } from "../../types";
import { FormattedMessage } from "react-intl";
import {
	Container,
	Header,
	Divider
} from "semantic-ui-react";
import { containerStyle } from "../containerStyle";

export const ForgotContainer: FC = () => {
	const navigate = useNavigate();
	const initialValuesForgot = {
		email: "",
	};
	const [
		sendPasswordResetEmail,
		,
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
		<Container
			fluid
			style={{
				...containerStyle.root
			}}
		>
			<Container text>
				<Container text>
					<Header
						textAlign="center"
						as="h1"
					>
						<FormattedMessage id="template.resetTitle"/>
					</Header>
				</Container>
				<Divider hidden/>
				<ForgotForm
					initialValues={initialValuesForgot}
					onSubmit={onSubmit}
					isLoading={false}
				/>
			</Container>
		</Container>
	);
};
