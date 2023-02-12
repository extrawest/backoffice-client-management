import { Typography } from "antd";
import { FC } from "react";
import { TypographyTitleProps } from "./TypographyTitle.types";

export const TypographyTitle: FC<TypographyTitleProps> = ({textAlign, ...rest}) => {
	const { Title } = Typography;
	return (
		<Title
			{...rest}
			style={{
				textAlign: textAlign
			}}
		/>
	);
};
