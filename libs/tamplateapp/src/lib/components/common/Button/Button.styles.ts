import {Theme} from "@mui/material";
import { linearGradient, pxToRem } from "@mono-redux-starter/shared/utils";
import { theme } from "../../../theme";

export const buttonStyles =  {
	tableBtn: {
		minWidth:  theme.spacing(100/8),
		maxWidth: theme.spacing(180/8),
		width: "100%",
		minHeight:  theme.spacing(44/8),
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding:  theme.spacing(
			1.25,
			1.875
		),
		fontSize: pxToRem(14),
		fontWeight: 700,
		borderRadius: theme.spacing(50/8),
		overflow: "hidden",
		outline: "none",
		transition: "0.3 ease",
		background: linearGradient(
			174.19,
			theme.palette.info.contrastText,
			-0.39,
			theme.palette.blue[600],
			154.32
		),
		"&.MuiButton-contained": {
			color: "common.white",
			"&.MuiButtonBase-root.MuiButton-root:hover": {
				backgroundColor: "primary.main",
				opacity: 0.8,
			}
		},

		"&:disabled": {
			opacity: 0.24,
		},
		//temporary property, not specified in the design
		"&:hover": {
			backgroundColor: "rgba(0, 0, 0, 0.05)",
		},
		"&:focus": {
			backgroundColor: "rgba(0, 0, 0, 0.05)",
		}
	},
	disabled: {
		opacity: 0.24,
	}
};
