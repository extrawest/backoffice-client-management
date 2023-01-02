import { pxToRem } from "@mono-redux-starter/shared/utils";
import { theme } from "../../theme";

export const forgotStyles = {
	pageContent: {
		width: theme.spacing(500 / 8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "stretch",
		padding: 0,
		color: "primary.main",
		"& .MuiFormControl-root.MuiTextField-root": {
			width: "100%",
			marginTop: 0,
			marginBottom: theme.spacing(20 / 8),
		},
	},
	formWrapper:{
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		textAlign: "center",
		color: "secondary.main",
		marginBottom: theme.spacing(50 / 8),
	},
	textInput: {
		color: "primary.main",
		"& input:-internal-autofill-selected": {
			backgroundColor: "secondary.main",
			color: "primary.main",
		},
		"& .MuiFormLabel-root.MuiInputLabel-root": {
			fontSize: pxToRem(14),
			fontWeight: 500,
			color: "primary.main",
			opacity: 0.45,
			left: theme.spacing(4 / 8),
			top: theme.spacing(-2 / 8),
			"&.MuiInputLabel-shrink": {
				opacity: 0,
				display: "none",
			}
		},
		"& .MuiInputBase-input.MuiFilledInput-input": {
			padding: theme.spacing(
				1.375,
				2
			),
			borderRadius: theme.spacing(2 / 8),
			overflow: "hidden",
		},
		"& .MuiInputBase-root.MuiFilledInput-root": {
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
			"&::before": {
				display: "none",
				border: "none"
			},
			"&:hover::after": {
				display: "none",
				border: "none"
			}
		},
		"& .MuiFormHelperText-root": {
			textTransform: "none",
			fontWeight: "400",
			fontSize: theme.typography.subtitle1
		},
		"& .MuiFormHelperText-root.Mui-error": {
			color: "error.main",
			border: "none"
		},
		"& .MuiInputBase-root.MuiFilledInput-root:after": {
			display: "none",
			border: "none"
		},
		"& .MuiInputBase-root.MuiFilledInput-root .MuiInputAdornment-root.MuiInputAdornment-filled": {
			marginTop: 0
		}
	},
	submitButton: {
		marginBottom: theme.spacing(20/8)
	}
};
