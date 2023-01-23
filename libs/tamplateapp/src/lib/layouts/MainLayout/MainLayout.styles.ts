import {
	alpha,
	SxProps,
	Theme
} from "@mui/material";
import { SxStyles } from "libs/material-lib/src/lib/types/styles";

export const mainLayoutStyles: SxStyles = {
	layoutContainer: {
		display: "flex",
		overflow: "hidden",
		height: "100vh"
	},
	appBar: {
		zIndex: 2,
		display: {
			xs: "flex",
			md: "none",
		}
	},
	drawer: {
		flexShrink: 0,
		width: "370px",
		overflowY: "auto",
		"&.MuiDrawer-docked": {
			overflowX: "hidden",
		},
		"&.MuiDrawer-root>.MuiPaper-root": {
			width: "350px",
			boxShadow: (theme: Theme) => `0 4px 34px ${alpha(
				theme.palette.secondary.main,
				0.09
			)}`,
			position: "relative",
			top: "0",
			padding: (theme: Theme) => theme.spacing(
				6.25,
				50/8,
				5
			),
			backgroundColor: "background.default",
			border: "none",
			scrollWidth: 0,
			overflowX: "hidden",
			"&::-webkit-scrollbar-track": {
				backgroundColor: "primary.main",
			},
			"&::-webkit-scrollbar-thumb": {
				backgroundColor: "info.contrastText",
			},
		}
	},
	menuButton: {
		marginRight: (theme: Theme) => theme.spacing(2),
		display: {
			xs: "flex",
			md: "none",
		},
	},
	contentWrap: {
		marginTop: {
			xs: "48px",
			sm: "64px",
			md: 0,
		},
		padding: 0,
		overflowX: "hidden",
		width: "100%",
	},
	title: {
		color: "primary.contrastText",
		textDecoration: "none",
		transition: "0.3s ease",
		cursor: "pointer",
		"&:hover": {
			opacity: "0.7",
			textDecoration: "none",
		},
	},
	wrapperSx: {
		width: "100%",
		padding: (theme: Theme) => theme.spacing(
			50/8,
			20/8
		)
	}
};
