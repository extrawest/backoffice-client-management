import { SelectValue } from "@mono-redux-starter/shared/types";
import {
	SelectProps,
	SxProps,
	Theme
} from "@mui/material";

export interface SelectInputProps {
	label?: string,
	input: string,
	disabled?: boolean,
	value: string | number;
	onBlur?: SelectProps["onBlur"];
	onChange?: SelectProps["onChange"];
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
