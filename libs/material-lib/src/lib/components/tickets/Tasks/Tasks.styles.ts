import { Theme } from "@mui/material";
import { commonContainers } from "../../../containers/commonContainers.styles";
import { SxStyles } from "../../../types/styles";

export const tasksStyles: SxStyles = {
	wrapper: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		height: "100%"
	},
	tasksWrapper: {
		...commonContainers["titleWrapperSx"],
		padding: (theme: Theme) => theme.spacing(
			32/8,
			32/8,
			18/8
		),
		marginBottom: 0,
	},
	titleWrapper: {
		display: "flex",
		flexDirection: "column",
		gap: (theme: Theme) => theme.spacing(5/8),
		width: "80%"
	},
	taskListTitleWrapperStyles: {
		padding: (theme: Theme) =>theme.spacing(
			18/8,
			32/8
		),
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: (theme: Theme) => theme.spacing(10/8),
		borderBottom: (theme: Theme) => `${theme.spacing(1/8)} solid ${theme.palette.grayscale[200]}`,
		"&:last-of-type": {
			border: "none"
		}
	},
	taskListTitleStyles: {
		color: (theme: Theme) => theme.palette.grayscale[400],
	},
	addButtonStyle: {
		borderRadius: (theme: Theme) => theme.spacing(8/8),
		padding: (theme: Theme) => theme.spacing(4/8),
		background: (theme: Theme) => theme.palette.grayscale[100]
	}
};
