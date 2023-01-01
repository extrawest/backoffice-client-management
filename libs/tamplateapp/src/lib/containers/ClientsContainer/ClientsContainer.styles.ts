import { SxProps } from "@mui/material";
import { theme } from "../../theme";

export const wrapperSx: SxProps = {
	padding: theme.spacing(
		50/8,
		20/8
	)
};
export const textFieldSx:SxProps = {
	"& .MuiInputBase-root.MuiFilledInput-root": {
		maxWidth: theme.spacing(500/8),
		color: theme.palette.grayscale[600],
		backgroundColor: "common.white",
		opacity: 1,
		boxShadow: "none",
		borderRadius: theme.spacing(50 / 8),
		border: `${theme.spacing(1 / 8)} solid ${theme.palette.grayscale[300]}`,
		overflow: "hidden",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		"& .MuiInputBase-input": {
			paddingTop: theme.spacing(8/8),
		},
		"&::before": {
			display: "none",
			border: "none"
		},
		"&:hover::after": {
			display: "none",
			border: "none"
		},
		"& .MuiInputAdornment-root.MuiInputAdornment-filled": {
			marginTop: 0
		}
	},
};

export const contentSx: SxProps = {
	marginTop: theme.spacing(30/8),
};
