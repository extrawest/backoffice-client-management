import { Theme } from "@mui/material";
import { SxStyles } from "../types/styles";

export const commonContainers: SxStyles = {
	titleWrapperSx: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: (theme: Theme) => theme.spacing(20/8)
	},
	gridItem: {
		border: (theme: Theme) => `${theme.spacing(1/8)} solid ${theme.palette.grayscale[200]}`,
		borderRadius: (theme: Theme) => theme.spacing(8/8),
	},
	contentSx: {
		marginTop: (theme: Theme) => theme.spacing(30/8),
	}
};
