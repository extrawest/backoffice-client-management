import { SxProps, Theme } from "@mui/material";

export const actionsWrapperSx: SxProps<Theme> = {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: (theme: Theme) => theme.spacing(
		15/8,
		20/8
	)
};
export const searchInputSx: SxProps<Theme> = {
	maxWidth: (theme: Theme) => theme.spacing(250/8),
	width: "100%",
	background: (theme: Theme) => theme.palette.background.default,
	"&.MuiOutlinedInput-root": {
		paddingLeft: (theme: Theme) => theme.spacing(8/8),
	},
	"& svg": {
		fill: (theme: Theme) => theme.palette.grayscale[400]
	},
	"& .MuiInputBase-input": {
		fontSize: (theme: Theme) => theme.spacing(12/8),
		padding: "8px",
		paddingLeft: 0,
		"&:placeholder": {
			color: (theme: Theme) => theme.palette.grayscale[400]
		}
	}
};
export const filterWrapperSx: SxProps<Theme> = {
	position: "relative",
};
export const filterButtonSx: SxProps<Theme> = {
	"&.MuiIconButton-root": {
		background: (theme: Theme) => theme.palette.background.default,
		borderRadius: (theme: Theme) => theme.spacing(4/8)
	}
};
export const formWrapperSx: SxProps<Theme> = {
	"& .MuiPaper-root": {
		maxWidth: (theme: Theme) => theme.spacing(300/8),
		width: "100%",
	}
};
export const filterIconActiveSx: SxProps<Theme> = {
	"&.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium": {
		fill: (theme: Theme) => theme.palette.blue[600]
	}
};
