import { SxProps, Theme } from "@mui/material";
import { theme } from "../../../theme";

export const rootSx:SxProps<Theme> = {
	boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.05)",
	borderRadius: "8px",
	backgroundColor: "transparent",
	"& .MuiPaper-root": {
		background: theme.palette.background.default,
		[theme.breakpoints.down("lg")]: {
			m: theme.spacing(8/8),
			maxHeight: `calc(100% - ${theme.spacing(16/8)})`,
			width: "100%"
		}
	},
};
export const titleSx:SxProps<Theme> = {
	[theme.breakpoints.down("lg")]: {
		fontSize: theme.spacing(12/8),
		pl: theme.spacing(8/8)
	}
};
export const headerSx:SxProps<Theme> = {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	paddingRight: theme.spacing(10/8),
	background: theme.palette.grayscale[100],
	borderBottomWidth: theme.spacing(1/8),
	borderBottomStyle: "solid",
	borderBottomColor: theme.palette.grayscale[400]
};

export const contentSx = (withoutPaddings: boolean): SxProps<Theme> => ({
	padding: withoutPaddings ? 0 : "auto"
});
