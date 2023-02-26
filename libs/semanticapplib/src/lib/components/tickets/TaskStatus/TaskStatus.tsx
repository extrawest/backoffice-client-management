import {
	availableDark,
	background,
	grayscale200,
	grayscale400,
	warningMain
} from "@mono-redux-starter/shared/color";
import { TaskStatusEnum } from "@mono-redux-starter/shared/types";
import { FC } from "react";
import { TypographyEnum } from "../../../types/typography";
import { Typography } from "../../common/Typography/Typography";
import { TaskStatusProps } from "./TaskStatus.types";
import { taskStatusStyle } from "./TaskStatys.styles";

export const TaskStatus: FC<TaskStatusProps> = ({ status }) => {
	const MapStylesWrapper = {
		[TaskStatusEnum.DEFAULT]: grayscale200,
		[TaskStatusEnum.NEW]: availableDark,
		[TaskStatusEnum.URGENT]: warningMain,
	} as const;
	const MapStylesTypography = {
		[TaskStatusEnum.DEFAULT]: grayscale400,
		[TaskStatusEnum.NEW]: background,
		[TaskStatusEnum.URGENT]: background,
	} as const;

	return (
		<div
			style={{
				...taskStatusStyle.wrapper,
				background: MapStylesWrapper[status]
			}}
		>
			<Typography
				type={TypographyEnum.SUBTITLE1}
				style={{
					color: MapStylesTypography[status]
				}}
			>
				{status}
			</Typography>
		</div>
	);
};
