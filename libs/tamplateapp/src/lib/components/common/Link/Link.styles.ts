import {Theme} from "@mui/material";
import { pxToRem } from "@mono-redux-starter/shared/utils";
import { theme } from "../../../theme";

export const linkStyles =  {
	tableBtn: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontSize: pxToRem(14),
		fontWeight: 700,
		borderRadius: theme.spacing(2/8),
		overflow: "hidden",
		outline: "none",
		transition: "0.3 ease",
		color: theme.palette.blue[600]
	},
};
