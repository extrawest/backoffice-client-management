import { SxProps, Theme } from "@mui/material";

export const chartWrapperSx: SxProps<Theme> = {
	padding: (theme: Theme) => theme.spacing(32/8),
	borderRight: (theme: Theme) => `${theme.spacing(1/8)} solid ${theme.palette.grayscale[200]}`,
	height: "100%"
};
