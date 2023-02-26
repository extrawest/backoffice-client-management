import {
	errorMain,
	successMain,
	primaryMain
} from "@mono-redux-starter/shared/color";
import { PriorityEnum } from "@mono-redux-starter/shared/types";
import { FC } from "react";
import { TypographyParagraph } from "../TypographyParagraph/TypographyParagraph";
import { priorityStatusStyle } from "./PriorityStatus.styles";
import { PriorityStatusProps } from "./PriorityStatus.types";

export const PriorityStatus: FC<PriorityStatusProps> = ({ priority }) => {
	const MapStylesWrapper = {
		[PriorityEnum.HIGH]: errorMain,
		[PriorityEnum.NORMAL]: successMain,
		[PriorityEnum.LOW]: primaryMain,
	} as const;

	return (
		<div
			style={{
				...priorityStatusStyle.wrapper,
				background: MapStylesWrapper[PriorityEnum[priority]]
			}}
		>
			<TypographyParagraph
				style={priorityStatusStyle.label}
			>
				{priority}
			</TypographyParagraph>
		</div>
	);
};
