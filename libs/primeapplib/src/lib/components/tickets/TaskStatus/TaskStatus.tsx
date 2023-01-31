import { TaskStatusEnum } from "@mono-redux-starter/shared/types";
import { FC } from "react";
import { Typography } from "../../common/Typography/Typography";
import { TaskStatusProps } from "./TaskStatus.types";

export const TaskStatus: FC<TaskStatusProps> = ({ status }) => {
	const MapStylesWrapper = {
		[TaskStatusEnum.DEFAULT]: "bg-gray-200",
		[TaskStatusEnum.NEW]: "bg-green-500",
		[TaskStatusEnum.URGENT]: "bg-yellow-500",
	} as const;
	const MapStylesTypography = {
		[TaskStatusEnum.DEFAULT]: "text-gray-600",
		[TaskStatusEnum.NEW]: "text-white",
		[TaskStatusEnum.URGENT]: "text-white",
	} as const;

	return (
		<div className={`${MapStylesWrapper[status]} border-round-lg py-1 px-2 w-max`}>
			<Typography
				extraClasses={`${MapStylesTypography[status]} text-4 font-semibold`}
			>
				{status}
			</Typography>
		</div>
	);
};
