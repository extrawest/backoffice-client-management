import { mergeStrings } from "@mono-redux-starter/shared/utils";
import { FC } from "react";
import { TagEnum, TypographyEnum } from "../../../types/typography";
import { TypographyProps } from "./Typography.types";

export const Typography: FC<TypographyProps> = ({children, type = TypographyEnum.BODY1, extraClasses, tag = TagEnum.P}) => {
	const Tag = tag;
	const MapStyles = {
		[TypographyEnum.H1]: "lg:text-5xl font-semibold text-3xl line-height-2 text-center",
		[TypographyEnum.H4]: "lg:text-4xl font-medium text-2xl line-height-2 text-center",
		[TypographyEnum.H5]: "lg:text-3xl font-medium text-2xl line-height-2 text-center",
		[TypographyEnum.BODY2]: "lg:text-sm text-xs line-height-2 text-center",
		[TypographyEnum.BODY1]: "lg:text-base text-sm line-height-2 text-center",
		[TypographyEnum.BUTTON]: "lg:text-2xl text-base line-height-2 text-center",
		[TypographyEnum.CAPTION]: "lg:text-lg font-bold text-xs line-height-2 text-center",
		[TypographyEnum.SUBTITLE1]: "lg:text-lg font-medium text-base line-height-2 text-center",
		[TypographyEnum.DESCRIPTION]: "lg:text-base text-sm line-height-2 text-gray-600 text-center",
		[TypographyEnum.TITLE]: "lg:text-lg text-sm line-height-2 text-gray-600 text-center font-bold"
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
