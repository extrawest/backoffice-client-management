import {
	errorMain,
	successMain,
	warningMain
} from "@mono-redux-starter/shared/color";
import { PriorityEnum } from "@mono-redux-starter/shared/types";
import { FC } from "react";
import { TypographyEnum } from "../../../types/typography";
import { Typography } from "../Typography/Typography";
import { priorityStatusStyles } from "./PriorityStatus.styles";
import { PriorityStatusProps } from "./PriorityStatus.types";

export const PriorityStatus: FC<PriorityStatusProps> = ({ priority }) => {
	const MapStylesWrapper = {
		[PriorityEnum.HIGH]: errorMain,
		[PriorityEnum.NORMAL]: successMain,
		[PriorityEnum.LOW]: warningMain,
	} as const;

	return (
		<div
			style={{
				...priorityStatusStyles,
				background: MapStylesWrapper[priority as PriorityEnum]
			}}
		>
			<Typography
				type={TypographyEnum.SUBTITLE1}
				style={{
					fontWeight: 600
				}}
			>
				{priority}
			</Typography>
		</div>
	);
};
