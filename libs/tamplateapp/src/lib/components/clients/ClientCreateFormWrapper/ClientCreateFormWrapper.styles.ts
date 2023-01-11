import { SxProps, Theme } from "@mui/material";

export const wrapperSx: SxProps<Theme> = {
	display: "flex",
	alignItems: "flex-start",
	justifyContent: "center",
	gap: (theme: Theme) => theme.spacing(10/8)
};
