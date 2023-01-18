import { Theme } from "@mui/material";
import { SxStyles } from "../../../types/styles";

export const chartWrapper: SxStyles = {
	chart: {
		padding: (theme: Theme) => theme.spacing(32/8),
		borderRight: (theme: Theme) => `${theme.spacing(1/8)} solid ${theme.palette.grayscale[200]}`,
		height: "100%"
	},
	chartDataItem: {
		padding: (theme: Theme) => theme.spacing(32/8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: (theme: Theme) => theme.spacing(10/8),
		borderBottom: (theme: Theme) => `${theme.spacing(1/8)} solid ${theme.palette.grayscale[200]}`,
		"&:last-of-type": {
			border: "none"
		}
	}
};
