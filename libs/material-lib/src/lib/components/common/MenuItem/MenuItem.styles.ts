import { pxToRem } from "@mono-redux-starter/shared/utils";
import { theme } from "../../../theme";

export const menuItemStyles = {
	itemWrap: {
		display: "flex",
		alignItems: "center",
		gap: theme.spacing(15/8)
	},
	svgIcon: {
		overflow: "visible"
	},
	menuLink: {
		width: "100%",
		display: "inline-flex",
		fontSize: pxToRem(16),
		fontWeight: 400,
		lineHeight: "1.5",
		color: "primary.contrastText",
		textDecoration: "none",
		transition: "0.3s ease",
		cursor: "pointer",
		outline: "none",
		padding: theme.spacing(5/8),
		"&.active": {
			fontWeight: 600,
			background: theme.palette.grayscale[100]
		},
		"&:hover": {
			opacity: "0.7",
			textDecoration: "none",
		},
		"&:focus": {
			opacity: "0.7",
		},
		"&.MuiTypography-root": {
			marginRight: 0,
		}
	},
};
