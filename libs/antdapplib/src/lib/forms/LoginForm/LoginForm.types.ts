import { FormikHelpers } from "formik";

export type Values = {
	email: string,
	password: string
};

export type LoginFormProps = {
	initialValues: Values;
	isLoading: boolean;
	onSubmit: (values: Values) => void;
};