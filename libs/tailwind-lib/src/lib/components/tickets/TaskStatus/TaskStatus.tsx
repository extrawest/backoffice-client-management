import { TaskStatusEnum } from "@mono-redux-starter/shared/types";
import { FC } from "react";
import { Typography } from "../../common/Typography/Typography";
import { TaskStatusProps } from "./TaskStatus.types";

export const TaskStatus: FC<TaskStatusProps> = ({ status }) => {
	const MapStylesWrapper = {
		[TaskStatusEnum.DEFAULT]: "bg-grayscale-200",
		[TaskStatusEnum.NEW]: "bg-available-dark",
		[TaskStatusEnum.URGENT]: "bg-warning-main",
	} as const;
	const MapStylesTypography = {
		[TaskStatusEnum.DEFAULT]: "text-grayscale-400",
		[TaskStatusEnum.NEW]: "text-background",
		[TaskStatusEnum.URGENT]: "text-background",
	} as const;

	return (
		<div className={`${MapStylesWrapper[status]} rounded-lg py-1 px-2 w-max`}>
			<Typography
				extraClasses={`${MapStylesTypography[status]} text-4 font-semibold`}
			>
				{status}
			</Typography>
		</div>
	);
};
