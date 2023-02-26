import { FC } from "react";
import { TagEnum, TypographyEnum } from "../../../types/typography";
import { typographyStyle } from "./Typography.styles";
import { TypographyProps } from "./Typography.types";

export const Typography: FC<TypographyProps> = ({children, style, type = TypographyEnum.BODY1, tag = TagEnum.P, textAlign = "center"}) => {
	const Tag = tag;

	return (
		<Tag
			style={{
				...typographyStyle[type],
				...style,
				textAlign: textAlign
			}}
		>
			{children}
		</Tag>
	);
};
