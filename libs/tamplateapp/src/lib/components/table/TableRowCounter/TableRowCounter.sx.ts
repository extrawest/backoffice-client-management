import { theme } from "@mono-redux-starter/tamplateapp";
import { SxProps, Theme } from "@mui/material";

export const counterWrapperSx: SxProps<Theme> = {
	display: "flex",
	alignItems: "center",
	gap: theme.spacing(10/8),
	[theme.breakpoints.down("lg")]: {
		display: "none"
	}
};

export const rowsSelectSx: SxProps<Theme> = {
	background: "transparent",
	outline: "none",
	padding: theme.spacing(5/8),
	width: theme.spacing(40/8),
	boxSizing: "border-box",
	height: theme.spacing(40/8),
	borderRadius: theme.spacing(5/8),
	border: "none",
	"& .MuiSelect-select": {
		padding: 0
	},
	"& .MuiOutlinedInput-notchedOutline": {
		border: "none"
	},
	"& .MuiSelect-iconOutlined": {
		fill: theme.palette.grayscale[600],
		marginTop: theme.spacing(2/8)
	},
	"& input": {
		padding: theme.spacing(
			0,
			5/8
		)
	}
};
