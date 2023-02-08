import { Dayjs } from "dayjs";
import { FormikHelpers } from "formik";

export type Values = {
	firstName: string,
	email: string,
	lastName: string,
	date: number | string
};

export type ClientFormProps = {
	isLoading: boolean;
	onSubmit: (values: Values, form: FormikHelpers<Values>) => void;
};
