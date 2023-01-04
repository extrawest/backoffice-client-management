import { pxToRem } from "@mono-redux-starter/shared/utils";
import { theme } from "../../theme";
import { SxStyles } from "../../types/styles";

export const sidebarStyles: SxStyles =  {
	sidebarContainer: {
		width: "240px",
		height: `calc(100vh - 90px)`,
		display: "flex",
		flexDirection: "column",
		justifyContebt: "flex-start",
		flexShrink: 0,
		color: "primary.contrastText",
		outline: "none",
		"& .MuiMenuItem-root": {
			paddingLeft: 0,
		},
		"& .MuiList-root": {
			paddingTop: 0,
		},
		"& .MuiList-root > h3": {
			paddingLeft: 0,
		}
	},
	sidebarWrap: {
		marginBottom: theme.spacing(27 / 8),
	},
	userName: {
		marginTop: theme.spacing(20 / 8),
		display: "block"
	},
	caption: {
		textTransform: "uppercase",
		opacity: 0.5,
		marginBottom: theme.spacing(5 / 8),
	},
	menuWrap: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		height: "100%"
	},
	menuLink: {
		display: "inline-flex",
		fontSize: pxToRem(16),
		fontWeight: 400,
		lineHeight: "1.5",
		color: "primary.contrastText",
		textDecoration: "none",
		transition: "0.3s ease",
		cursor: "pointer",
		outline: "none",

		"&.active": {
			fontWeight: 600,
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
	sidebarFooter: {
		paddingTop: theme.spacing(20 / 8),
		marginTop: "auto",
		display: "flex",
		flexDirection: "column",
	},
	btnOut: {
		fontWeight: 400,
		fontSize: pxToRem(16),
		textTransform: "none",
		color: "primary.contrastText",
		textAlign: "left",
		justifyContent: "flex-start",
		paddingLeft: 0,
		"&.MuiButtonBase-root-MuiButton-root": {
			justifyContent: "flex-start",
			paddingTop: theme.spacing(4 / 8),
		}
	},
	buildingContainer: {
		minHeight: theme.spacing(47 / 8),
		display: "flex",
		alignItems: "center"
	}
};
