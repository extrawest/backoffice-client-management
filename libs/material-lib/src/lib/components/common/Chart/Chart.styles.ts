import { SxProps, Theme } from "@mui/material";
import { Color } from "chart.js";
import { SxStyles } from "libs/tamplateapp/src/lib/types/styles";

export const chartStyles: SxStyles = {
	headerWrapper: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end",
		marginBottom: (theme: Theme) => theme.spacing(25/8)
	},
	titleWrapper: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		gap: (theme: Theme) => theme.spacing(5/8)
	},
	legendsList: {
		maxWidth: (theme: Theme) => theme.spacing(200/8),
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		gap: (theme: Theme) => theme.spacing(20/8)
	},
}
export const legendSx = (color: string): SxProps<Theme> => ({
	position: "relative",
	paddingLeft: (theme: Theme) => theme.spacing(30/8),
	"&:before": {
		content: "''",
		position: "absolute",
		left: 0,
		top: "50%",
		transform: "translateY(-50%)",
		display: "block",
		width: (theme: Theme) => theme.spacing(20/8),
		height: (theme: Theme) => theme.spacing(4/8),
		background: (theme: Theme) => color ?? theme.palette.grayscale[200]
	}
})
