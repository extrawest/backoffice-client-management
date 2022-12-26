import { Theme } from "@mui/material";
import { pxToRem } from "@mono-redux-starter/shared/utils";
import { theme } from "../theme";

export const commonFormStyles = {
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
	title: {
		marginBottom: theme.spacing(12 / 8),
		color: "common.black"
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
	subtitle: {
		marginLeft: theme.spacing(5 / 8),
		color: "primary.dark",
	},
	addWrap: {
		display: "flex",
		alignItems: "flex-start",
		"& button": {
			marginRight: theme.spacing(16 / 8),
		}
	},
	checkboxInput:{
		"&.Mui-checked": {
			color: theme.palette.blue[600]
		}
	}
};
