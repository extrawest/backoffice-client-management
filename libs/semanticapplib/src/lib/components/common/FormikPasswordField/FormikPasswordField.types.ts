import { ReactNode } from "react";
import { InputProps } from "semantic-ui-react";

export type FormikPasswordFieldProps = Omit<InputProps, "name"> & {
	name: string,
	startAdornment?: ReactNode,
};
