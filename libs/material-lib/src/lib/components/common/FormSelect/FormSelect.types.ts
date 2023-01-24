import { SelectValue } from "@mono-redux-starter/shared/types";
import {
	SelectChangeEvent,
	SxProps,
	Theme
} from "@mui/material";
import { FocusEvent } from "react";

export interface SelectInputProps {
	label?: string,
	input: string,
	disabled?: boolean,
	value: string | number;
	onBlur?: (e: FocusEvent<any>) => void;
	onChange?: (e: SelectChangeEvent<any>) => void;
	onClick?: (value: string | number) => void
	hasError?: boolean | string;
	helperText?: string;
	className?: string;
	required?: boolean;
	placeholder?: string,
	description?: string,
	sx?: SxProps<Theme>,
	select?: boolean,
	data: SelectValue[],
	defaultValue?: boolean
}
