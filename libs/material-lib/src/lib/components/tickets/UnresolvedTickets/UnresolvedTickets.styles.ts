import { Theme } from "@mui/material";
import { commonContainers } from "../../../containers/commonContainers.styles";
import { SxStyles } from "../../../types/styles";

export const unresolvedTicketsStyles: SxStyles = {
	wrapper: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		height: "100%"
	},
	ticketsWrapper: {
		...commonContainers["titleWrapperSx"],
		padding: (theme: Theme) => theme.spacing(
			32/8,
			32/8,
			18/8
		),
		height: "100%",
		marginBottom: 0,
	},
	titleWrapper: {
		display: "flex",
		flexDirection: "column",
		gap: (theme: Theme) => theme.spacing(5/8),
		width: "100%"
	}
};
