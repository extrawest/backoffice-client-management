import { SxProps, Theme } from "@mui/material";

export const counterWrapperSx: SxProps<Theme> = (theme: Theme) => ({
	display: "flex",
	alignItems: "center",
	gap: theme.spacing(10/8),
	[theme.breakpoints.down("lg")]: {
		display: "none"
	}
});

export const rowsSelectSx: SxProps<Theme> = {
	background: "transparent",
	outline: "none",
	padding: (theme: Theme) => theme.spacing(5/8),
	width: (theme: Theme) => theme.spacing(40/8),
	boxSizing: "border-box",
	height: (theme: Theme) => theme.spacing(40/8),
	borderRadius: (theme: Theme) => theme.spacing(5/8),
	border: "none",
	"& .MuiSelect-select": {
		padding: 0
	},
	"& .MuiOutlinedInput-notchedOutline": {
		border: "none"
	},
	"& .MuiSelect-iconOutlined": {
		fill: (theme: Theme) => theme.palette.grayscale[600],
		marginTop: (theme: Theme) => theme.spacing(2/8)
	},
	"& input": {
		padding: (theme: Theme) => theme.spacing(
			0,
			5/8
		)
	}
};
