import { SxProps, Theme } from "@mui/material";

export const taskListItemStyle: SxProps<Theme> = {
	padding: (theme: Theme) => theme.spacing(
		19/8,
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
};

export const taskListItemLabelStyle: SxProps<Theme> = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: (theme: Theme) => theme.spacing(5/8),
	"& label": {
		margin: 0
	},
	"& .MuiButtonBase-root": {
		padding: 0
	}
};

export const checkedIconStyle: SxProps<Theme> = {
	fill: (theme: Theme) => theme.palette.blue[600]
};
