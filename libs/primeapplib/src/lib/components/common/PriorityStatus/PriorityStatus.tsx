import { PriorityEnum } from "@mono-redux-starter/shared/types";
import { FC } from "react";
import { Typography } from "../Typography/Typography";
import { PriorityStatusProps } from "./PriorityStatus.types";

export const PriorityStatus: FC<PriorityStatusProps> = ({ priority }) => {
	const MapStylesWrapper = {
		[PriorityEnum.HIGH]: "bg-red-400",
		[PriorityEnum.NORMAL]: "bg-yellow-400",
		[PriorityEnum.LOW]: "bg-green-400",
	} as const;

	return (
		<div
			className={`border-round-half px-2 py-2 ${MapStylesWrapper[priority]}`}
		>
			<Typography
				extraClasses="text-common-white text-4xl font-bold"
			>
				{priority}
			</Typography>
		</div>
	);
};
