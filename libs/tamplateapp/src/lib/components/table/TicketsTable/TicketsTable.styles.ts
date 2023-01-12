import { SxProps, Theme } from "@mui/material";

export const wrapperSx: SxProps<Theme> = {
	width: "100%",
	border: (theme: Theme) => `${theme.spacing(1/8)} solid ${theme.palette.grayscale[400]}`,
	borderRadius: (theme: Theme) => theme.spacing(8/8),
	overflow: "hidden"
};

export const tableFooterSx: SxProps<Theme> = {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	px: 0,
	py: 1
};
