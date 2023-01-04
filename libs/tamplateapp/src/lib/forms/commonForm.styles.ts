import { SxProps, Theme } from "@mui/material";
import { pxToRem } from "@mono-redux-starter/shared/utils";
import { theme } from "../theme";
import { SxStyles } from "../types/styles";

export const commonFormStyles: SxStyles = {
	wrapper: {
		boxSizing: "border-box",
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		color: "primary.main",
	},
	titleWrap: {
		display: "flex",
		justifyContent: "space-between",
		marginBottom: theme.spacing(24 / 8),
	},
	removeBtn: {
		color: "error.main",
		textDecoration: "underline",
		transition: "opacity 0.3s ease",
		"&:hover": {
			textDecoration: "underline",
			backgroundColor: "ransparent",
			opacity: 0.8
		}
	},
	editSmBtn: {
		color: "common.black",
	},
	field: {
		margin: theme.spacing(
			1.25,
			0
		),
		"&:hover": {
			borderColor: "primary.main",
			"& .MuiFormLabel-root.MuiInputLabel-root": {
			}
		},
		"&:focus": {
			borderColor: "primary.main",
		},
	},
	headerWrapper: {
		marginBottom: theme.spacing(5)
	},
	btnWrap: {
		marginTop: theme.spacing(70 / 8),
		display: "flex",
		justifyContent: "space-between",
	},
	editBtn: {
		padding: theme.spacing(
			1.5,
			2.75
		),
		width: theme.spacing(100 / 8),
	},
	addBtn: {
		minWidth: theme.spacing(100 / 8),
	},
	featureWrap: {
		display: "flex",
		flexDirection: "column",
	},
	feature: {
		width: "100%",
		border: "1px solid red",
		justifyContent: "space-between",
	},
	formControl: {
		width: "100%",
		justifyContent: "space-between",
		borderBottom: "1px solid",
		borderColor: "success.main",
		padding: theme.spacing(
			1.25,
			0
		),
		"& .MuiFormControlLabel-label": {
			color: "common.black",
			fontSize: pxToRem(14),
			fontWeight: 500,
		},
		"&.MuiFormControlLabel-root": {
			margin: 0,
		},
	},
	selectStyle: {
		paddingRight: 0,

		"& svg": {
			position: "absolute",
			right: theme.spacing(15 / 8),
			pointerEvents: "none",
		},
	},
	addWrap: {
		display: "flex",
		alignItems: "flex-start",
		"& button": {
			marginRight: theme.spacing(16 / 8),
		}
	},
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
		marginBottom: theme.spacing(20 / 8),
		maxWidth: theme.spacing(340 / 8)
	},
	subtitle: {
		textAlign: "center",
		color: "secondary.main",
		marginBottom: theme.spacing(50 / 8),
		maxWidth: theme.spacing(405 / 8)
	},
	fieldsWrap: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		gap: theme.spacing(10/8)
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
		},
		"& .MuiInputAdornment-positionEnd": {
			cursor: "pointer"
		}
	},
	checkboxInput:{
		"&.Mui-checked": {
			color: theme.palette.blue[600]
		}
	},
	actionsWrapper: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: theme.spacing(20/8)
	},
	submitButton: {
		marginBottom: theme.spacing(20/8)
	}
};
