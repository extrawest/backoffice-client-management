import { InputTextProps } from "primereact/inputtext";
import { ReactNode } from "react";

export type FormikPasswordFieldProps = Omit<InputTextProps, "name"> & {
	name: string,
	startAdornment?: ReactNode,
	onAdornmentClick?: () => void
};
