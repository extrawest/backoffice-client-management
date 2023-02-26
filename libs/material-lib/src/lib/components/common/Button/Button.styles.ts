import { linearGradient, pxToRem } from "@mono-redux-starter/shared/utils";
import { theme } from "../../../theme";
import { SxStyles } from "../../../types/styles";
import { commonFormStyles } from "../../../forms/commonForm.styles";

export const buttonStyles: SxStyles =  {
	tableBtn: {
		...commonFormStyles["submitButton"],
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
			-0.39,
			154.32,
			theme.palette.info.contrastText,
			theme.palette.blue[600],
		),
		color: theme.palette.background.default,
		"&.MuiButton-contained": {
			color: "common.white",
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
	outlined: {
		...commonFormStyles["submitButton"],
		backgorund: "transparent",
		color: theme.palette.blue[600],
		border: "none",
		fontSize: pxToRem(14),
		fontWeight: 600,
		letterSpacing: "0.2px",
		padding: 0
	},
	disabled: {
		opacity: 0.24,
	},
	boxWrapper: {
		display: "flex",
		gap: theme.spacing(5/8),
		alingItems: "center"
	}
};
