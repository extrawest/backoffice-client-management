import { Theme } from "@mui/material";
import { SxStyles } from "../../../types/styles";

export const cellStyles: SxStyles = {
	wrapper: {
		display: "flex",
		flexDirection: "column",
		gap: (theme: Theme) => theme.spacing(5/8),
		padding: (theme: Theme) => theme.spacing(8/8),
	},
	mainText: {
		fontWeight: 600,
	},
	caption: {
		display: "flex",
		gap: (theme: Theme) => theme.spacing(5/8)
	}
};
