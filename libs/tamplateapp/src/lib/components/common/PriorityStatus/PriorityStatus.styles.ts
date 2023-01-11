import { SxProps, Theme } from "@mui/material";
import { PriorityEnum } from "libs/shared/types/src/lib/enums/PriorityEnum";

export const priorityStatusStyles = (priority: PriorityEnum): SxProps<Theme> => ({
	borderRadius: (theme: Theme) => theme.spacing(50/8),
	padding: (theme: Theme) => theme.spacing(
		5/8,
		8/8
	),
	background: (theme: Theme) => {
		const MapStyles = {
			HIGH: theme.palette.error.main,
			NORMAL: theme.palette.success.main,
			LOW: theme.palette.warning.main,
		} as const;
		return MapStyles[priority];
	}
});

export const typographySx : SxProps<Theme> = {
	color: (theme: Theme) => theme.palette.background.default,
	fontSize: (theme: Theme) => theme.spacing(14/8),
	lineHeight: (theme: Theme) => theme.spacing(16/8),
	fontWeight: 700,
};
