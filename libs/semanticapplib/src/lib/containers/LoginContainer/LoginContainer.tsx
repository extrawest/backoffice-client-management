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
import { FormattedMessage } from "react-intl";
import {
	Container,
	Divider,
	Header
} from "semantic-ui-react";
import { containerStyle } from "../containerStyle";
import { Typography } from "../../components/common/Typography/Typography";
import { TypographyEnum } from "../../types/typography";

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
						<FormattedMessage id="template.loginToAccount"/>
					</Header>
					<Typography
						type={TypographyEnum.DESCRIPTION}
					>
						<FormattedMessage id="template.loginDescription"/>
					</Typography>
				</Container>
				<Divider hidden/>
				<LoginForm
					initialValues={initialValuesLogin}
					onSubmit={onSubmit}
					isLoading={false}
				/>
			</Container>
		</Container>
	);
};
