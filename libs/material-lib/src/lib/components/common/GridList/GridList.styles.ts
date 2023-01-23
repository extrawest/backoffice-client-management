import { SxProps, Theme } from "@mui/material";

export const gridListItemStyle = (direction: "row" | "column"): SxProps<Theme> => ({
	padding: (theme: Theme) => direction === "row"
		? theme.spacing(
			18/8,
			32/8
		)
		: theme.spacing(32/8),
	display: "flex",
	flexDirection: direction,
	alignItems: "center",
	justifyContent: direction === "column" ? "center" : "space-between",
	gap: (theme: Theme) => theme.spacing(10/8),
	borderBottom: (theme: Theme) => `${theme.spacing(1/8)} solid ${theme.palette.grayscale[200]}`,
	"&:last-of-type": {
		border: "none"
	}
});

export const gridListItemTitleStyle  = (direction: "row" | "column"): SxProps<Theme> => ({
	color: (theme: Theme) => direction === "column" ? theme.palette.grayscale[400] : "inherit",
	fontWeight: direction === "column" ? "inherit" : 600
});
export const gridListItemValueStyle  = (direction: "row" | "column"): SxProps<Theme> => ({
	color: (theme: Theme) => direction !== "column" ? theme.palette.grayscale[400] : "inherit",
});
