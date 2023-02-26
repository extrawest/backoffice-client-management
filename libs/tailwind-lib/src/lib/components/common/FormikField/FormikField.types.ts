import { ReactNode } from "react";

export interface FormikFieldProps {
	type: string,
	placeholder: string,
	name: string,
	error: string | undefined,
	hasError: boolean | undefined,
	startAdornment?: ReactNode,
	endAdornment?: boolean,
	id?: string,
}
