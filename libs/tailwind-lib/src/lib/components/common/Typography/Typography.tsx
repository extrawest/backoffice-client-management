import { mergeStrings } from "@mono-redux-starter/shared/utils";
import { FC } from "react";
import { TagEnum, TypographyEnum } from "../../../types/typography";
import { TypographyProps } from "./Typography.types";

export const Typography: FC<TypographyProps> = ({children, type = TypographyEnum.BODY1, extraClasses, tag = TagEnum.P}) => {
	const Tag = tag;
	const MapStyles = {
		[TypographyEnum.H1]: "lg:text-5.5xl font-semibold text-3xl leading-tight text-center",
		[TypographyEnum.H4]: "lg:text-4.5xl font-medium text-2xl leading-tight text-center",
		[TypographyEnum.H5]: "lg:text-4.5xl font-medium text-2xl leading-tight text-center",
		[TypographyEnum.BODY2]: "lg:text-sm text-xs leading-tight text-center",
		[TypographyEnum.BODY1]: "lg:text-base text-sm leading-tight text-center",
		[TypographyEnum.BUTTON]: "lg:text-2xl text-base text-common-white leading-tight text-center",
		[TypographyEnum.CAPTION]: "lg:text-lg font-bold text-xs leading-tight text-center",
		[TypographyEnum.SUBTITLE1]: "lg:text-lg font-medium text-base leading-tight text-center",
		[TypographyEnum.DESCRIPTION]: "lg:text-base text-sm leading-tight text-grayscale-600 text-center"
	} as const;
	return (
		<Tag
			className={mergeStrings(
				MapStyles[type],
				extraClasses
			)}
		>
			{children}
		</Tag>
	);
};
