import { SelectValue } from "@mono-redux-starter/shared/types";
import { ReactNode } from "react";

export interface FormikSelectProps {
	placeholder: string,
	name: string,
	error: string | undefined,
	hasError: boolean | undefined,
	data: SelectValue[],
	startAdornment?: ReactNode,
	id?: string,
}
