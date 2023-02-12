import { FormikHelpers } from "formik";

export type Values = {
	email: string,
	password: string,
	confirmPassword: string,
	firstName: string,
	lastName: string
};

export type RegistrationFormProps = {
	initialValues: Values;
	isLoading: boolean;
	onSubmit: (values: Values) => void;
};
