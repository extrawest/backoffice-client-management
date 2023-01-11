import { SxProps, Theme } from "@mui/material";

export const wrapperSx: SxProps<Theme> = {
	padding: (theme: Theme) => theme.spacing(
		50/8,
		20/8
	)
};
export const textFieldSx: SxProps<Theme> = {
	"& .MuiInputBase-root.MuiFilledInput-root": {
		maxWidth: (theme: Theme) => theme.spacing(500/8),
		color: (theme: Theme) => theme.palette.grayscale[600],
		backgroundColor: "common.white",
		opacity: 1,
		boxShadow: "none",
		borderRadius: (theme: Theme) => theme.spacing(50 / 8),
		border: (theme: Theme) => `${theme.spacing(1 / 8)} solid ${theme.palette.grayscale[300]}`,
		overflow: "hidden",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		"& .MuiInputBase-input": {
			paddingTop: (theme: Theme) => theme.spacing(8/8),
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

export const contentSx: SxProps<Theme> = {
	marginTop: (theme: Theme) => theme.spacing(30/8),
};

export const titleWrapperSx: SxProps<Theme> = {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	marginBottom: (theme: Theme) => theme.spacing(20/8)
};
