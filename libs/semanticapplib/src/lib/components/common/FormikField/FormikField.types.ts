import { InputProps } from "semantic-ui-react";

export type FormikFieldProps = Omit<InputProps, "name"> & {
	name: string
};
