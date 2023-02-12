import { FormikHelpers } from "formik";

export type Values = {
	email: string,
};

export type ForgotFormProps = {
	initialValues: Values;
	isLoading: boolean;
	onSubmit: (values: Values) => void;
};
