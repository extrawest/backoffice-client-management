import { alpha } from "@mui/material";
import { theme } from "../../../theme";

export const useStyles = {
	imageSx: (
		size: string | number,
		rounded?: boolean
	) => ({
		width: `${size}px`,
		height: `${size}px`,
		borderRadius: rounded ? "50%" : "0",
		overflow: "hidden",
		boxShadow: `0 0 10px ${alpha(
			theme.palette.secondary.main,
			0.2
		)}`,
		"& img": {
			width: "100%",
			height: "100%"
		}
	})
};
