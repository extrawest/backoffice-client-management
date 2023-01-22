import { SxProps, Theme } from "@mui/material";

export const mergeStyles = (
	firstStyle: SxProps<Theme>,
	lastStyle?: SxProps<Theme>
) => {
	if(!lastStyle){
		return firstStyle;
	}
	return {
		...firstStyle,
		...lastStyle
	};
};
