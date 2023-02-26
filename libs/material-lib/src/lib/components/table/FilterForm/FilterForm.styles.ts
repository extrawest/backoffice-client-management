import { theme } from "../../../theme";
import { SxStyles } from "../../../types/styles";

export const filterFormSx: SxStyles = ({
	fieldsWrapper: {
		padding: theme.spacing(20/8),

	},
	formControl: {
		"&.MuiFormControl-root": {
			marginBottom: theme.spacing(5/8)
		}
	},
	actionsWrapper: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		gap: theme.spacing(5/8),
		padding: theme.spacing(
			10/8,
			20/8
		)
	},
	clearButton: {
		"&.MuiButtonBase-root.MuiButton-root.MuiButton-contained": {
			background: "transparent",
			color: theme.palette.grayscale[500],
			border: `${theme.spacing(1/8)} solid ${theme.palette.grayscale[500]}`,
			marginBottom: theme.spacing(20/8),
			marginTop: 0,
			"&:hover": {
				background: theme.palette.grayscale[100],
			}
		}
	}
});
