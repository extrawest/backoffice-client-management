import { SxProps, Theme } from "@mui/material";
import { theme } from "../../../theme";

export const placeholderWrapperSx: SxProps = {
	position: "relative",
	width: "100%",
	marginTop: theme.spacing(10/8)
};

export const containerSx: SxProps = {
	mt: 2,
	[theme.breakpoints.down("lg")]: {
		mt: 0.5
	}
};

export const placeholderSx: SxProps = {
	position: "absolute",
	width: "100%",
	height: "100%",
	padding: theme.spacing(
		12/8,
		14/8
	),
	color: theme.palette.grayscale[300],
	display: "flex",
	alignItems: "center"
};

export const descriptionSx: SxProps = {
	fontSize: "0.75rem",
	color: theme.palette.grayscale[600],
	py: 1
};

export const optionBtnSx:SxProps = {
	width: "100%",
	p: 0,
	justifyContent: "flex-start"
};

export const selectSx: SxProps<Theme> = {
	width: "100%",
	outline: "none",
	"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
		border: `${theme.spacing(1/8)} solid ${theme.palette.grayscale[400]} `
	}
};

export const menuItemSx: SxProps<Theme> = {
	background: theme.palette.background.default,
	"&.Mui-selected": {
		background: theme.palette.grayscale[100]
	},
	"&:hover, &.Mui-selected:hover": {
		background: theme.palette.grayscale[200]
	}
};
