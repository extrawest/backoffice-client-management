import { pxToRem } from "@mono-redux-starter/shared/utils";
import { theme } from "../../../theme";

export const linkStyles =  {
	tableBtn: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: theme.spacing(2/8),
		overflow: "hidden",
		outline: "none",
		transition: "0.3 ease",
		backgorund: "transparent",
		color: theme.palette.blue[600],
		border: "none",
		fontSize: pxToRem(14),
		fontWeight: 600,
		letterSpacing: "0.2px",
		width: "max-content"
	},
};
