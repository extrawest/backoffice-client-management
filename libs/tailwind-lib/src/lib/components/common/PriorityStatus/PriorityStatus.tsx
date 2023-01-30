import { PriorityEnum } from "@mono-redux-starter/shared/types";
import { FC } from "react";
import { Typography } from "../Typography/Typography";
import { typographySx } from "./PriorityStatus.styles";
import { PriorityStatusProps } from "./PriorityStatus.types";

export const PriorityStatus: FC<PriorityStatusProps> = ({ priority }) => {
	const MapStylesWrapper = {
		[PriorityEnum.HIGH]: "bg-error-main",
		[PriorityEnum.NORMAL]: "bg-success-main",
		[PriorityEnum.LOW]: "bg-warning-main",
	} as const;

	return (
		<div
			className="rounded-50 px-2 py-1 bg"
		>
			<Typography
				extraClasses="text-common-white text-4 font-bold"
			>
				{priority}
			</Typography>
		</div>
	);
};
