import { FC } from "react";
import { InputAdornment, TextField as MuiTextField } from "@mui/material";
import { textFieldStyles } from "./TextField.styles";
import { TextFieldProps } from "./TextField.types";
import { ReactNumberFormat } from "./NumberFormat/NumberFormat";
import { ReactNumberFormatArea } from "./NumberFormatArea/NumberFormatArea";

export const TextField: FC<TextFieldProps> = ({
	title,
	isPrice = false,
	isArea = false,
	startIcon,
	endIcon,
	onAdornmentClick,
	...rest
}) => {
	/* eslint-disable @typescript-eslint/no-explicit-any */
	const inputComponent =
		isPrice ? ReactNumberFormat as any :
			isArea ? ReactNumberFormatArea as any :
				"input";
	/* eslint-enable @typescript-eslint/no-explicit-any */

	return (
		<MuiTextField
			fullWidth
			InputProps={{
				inputComponent,
				startAdornment: (
					<InputAdornment position="start">
						{startIcon}
					</InputAdornment>
				),
				endAdornment: (
					<InputAdornment
						position="end"
						onClick={onAdornmentClick}
					>
						{endIcon}
					</InputAdornment>
				)
			}}
			margin="normal"
			variant="outlined"
			color="primary"
			sx={textFieldStyles.inputStyle}
			{...rest}
		/>
	);
};

export default TextField;
