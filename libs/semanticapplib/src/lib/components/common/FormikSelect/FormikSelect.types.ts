import { SemanticSelectValue } from "@mono-redux-starter/shared/types";
import { ReactNode } from "react";
import { DropdownProps } from "semantic-ui-react";

export interface FormikSelectProps {
	placeholder: string,
	name: string,
	error: string | undefined,
	hasError: boolean | undefined,
	data: SemanticSelectValue[],
	handleChange: DropdownProps["onChange"],
	startAdornment?: ReactNode,
	id?: string,
	value?: string
}
