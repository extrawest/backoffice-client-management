import { Typography} from "antd";
import { FC } from "react";
import { TypographyParagraphProps } from "./TypographyParagraph.types";

export const TypographyParagraph: FC<TypographyParagraphProps> = ({textAlign = "center", ...rest}) => {
	const { Paragraph } = Typography;
	return (
		<Paragraph
			{...rest}
			style={{
				textAlign: textAlign
			}}
		/>
	);
};
