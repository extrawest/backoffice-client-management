import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import { AppRouteEnum } from "../../types";
import {
	auth,
	firestore,
} from "@mono-redux-starter/firebase";
import {
	useCreateUserWithEmailAndPassword,
	useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { useShowSnackBarMessage } from "@mono-redux-starter/shared/hooks";
import { RegistrationForm, Values } from "../../forms/RegistrationForm";
import { doc, setDoc } from "firebase/firestore";
import { FormattedMessage } from "react-intl";
import {
	Container,
	Header,
	Divider
} from "semantic-ui-react";
import { containerStyle } from "../containerStyle";
import { Typography } from "../../components/common/Typography/Typography";
import { TypographyEnum } from "../../types/typography";

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
						<FormattedMessage id="template.signUpToAccount"/>
					</Header>
					<Typography
						type={TypographyEnum.DESCRIPTION}
					>
						<FormattedMessage id="template.loginDescription"/>
					</Typography>
				</Container>
				<Divider hidden/>
				<RegistrationForm
					initialValues={initialValuesSignUp}
					onSubmit={onSubmit}
					isLoading={false}
				/>
			</Container>
		</Container>
	);
};
