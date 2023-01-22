import { TaskStatusEnum } from "@mono-redux-starter/shared/types";
import { SxProps, Theme } from "@mui/material";

export const taskStatusStyles = (status: TaskStatusEnum): SxProps<Theme> => ({
	borderRadius: (theme: Theme) => theme.spacing(8/8),
	padding: (theme: Theme) => theme.spacing(
		5/8,
		8/8
	),
	background: (theme: Theme) => {
		const MapStyles = {
			[TaskStatusEnum.DEFAULT]: theme.palette.grayscale[200],
			[TaskStatusEnum.NEW]: theme.palette.success.main,
			[TaskStatusEnum.URGENT]: theme.palette.warning.main,
		} as const;
		return MapStyles[status];
	},
	width: "max-content"
});

export const typographySx = (status: TaskStatusEnum): SxProps<Theme> => ({
	color: (theme: Theme) => {
		const MapStyles = {
			[TaskStatusEnum.DEFAULT]: theme.palette.grayscale[400],
			[TaskStatusEnum.NEW]: theme.palette.background.default,
			[TaskStatusEnum.URGENT]: theme.palette.background.default,
		} as const;
		return MapStyles[status];
	},
	fontSize: (theme: Theme) => theme.spacing(14/8),
	lineHeight: (theme: Theme) => theme.spacing(16/8),
	fontWeight: 600,
});
