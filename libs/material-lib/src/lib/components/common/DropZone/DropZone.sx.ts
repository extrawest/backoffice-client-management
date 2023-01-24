import { theme } from "../../../theme";
import { SxStyles } from "../../../types/styles";

export const styles: SxStyles = {
	root: {
		flex: 1,
		display: "flex",
		minHeight: theme.spacing(180/8),
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		padding: theme.spacing(20/8),
		borderRadius: 4,
		color: theme.palette.grey[400],
		outline: "none",
		fontSize: "1rem",
		lineHeight: 3,
		marginBottom: theme.spacing(10/8),
		transition: "border .24s ease-in-out",
		maxWidth: theme.spacing(250/8),
		[theme.breakpoints.down("md")]: {
			marginRight: 0
		},
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(10/8),
			width: "100%",
			minHeight: theme.spacing(200/8),
		},
	},
	acceptStyle: {
		borderColor: theme.palette.secondary.main
	},
	dragImg: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},
	dragText: {
		marginTop: theme.spacing(10/8),
		textAlign: "center",
		display: "grid",
		gap: theme.spacing(10/8),
		color: theme.palette.grayscale[700],
		[theme.breakpoints.down("sm")]: {
			lineHeight: "20px",
			marginTop: theme.spacing(15/8)
		},
	},
	gridItem: {
		display: "flex",
		alignItems: "center",
		gap: theme.spacing(5/8)
	}
};
