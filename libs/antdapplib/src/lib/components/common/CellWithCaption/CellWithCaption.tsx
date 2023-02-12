import { pxToRem } from "@mono-redux-starter/shared/utils";
import { Col, Row } from "antd";
import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { TypographyEnum } from "../../../types/typography";
import { Typography } from "../Typography/Typography";
import { TypographyParagraph } from "../TypographyParagraph/TypographyParagraph";
import { CellWithCaptionProps } from "./CellWithCaption.types";

export const CellWithCaption: FC<CellWithCaptionProps> = ({ mainText, captionFormatMessage, caption }) => {
	return (
		<Row
			align="middle"
			justify="start"
		>
			<Col span={24}>
				<TypographyParagraph
					textAlign="start"
					style={{
						fontWeight: 600
					}}
				>
					{mainText}
				</TypographyParagraph>
			</Col>
			{caption &&
				<Col span={24}>
					<Row
						justify="space-between"
						gutter={[0, 16]}
						style={{gap: pxToRem(5)}}
					>
						{captionFormatMessage &&
							<TypographyParagraph textAlign="start">
								<FormattedMessage
									id={captionFormatMessage}
								/>
							</TypographyParagraph>
						}
						<TypographyParagraph textAlign="start">
							{caption}
						</TypographyParagraph>
					</Row>
				</Col>
			}
		</Row>
	);
};
