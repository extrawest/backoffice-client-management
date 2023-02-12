import {
	commonBlack,
	grayscale400,
	grayscale600
} from "@mono-redux-starter/shared/color";
import { SimpleDataList } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";
import { Col, Row } from "antd";
import { FC } from "react";
import { TypographyParagraph } from "../common/TypographyParagraph/TypographyParagraph";
import { gridListStyles } from "./GridList.styles";

import { GridListProps } from "./GridList.types";

export const GridList: FC<GridListProps> = ({
	data,
	direction = "column"
}) => {
	return (
		<Row
			align="middle"
			justify="space-between"
			style={{height: "100%"}}
		>
			{
				data.map((
					item: SimpleDataList,
					index: number
				) => (
					<Col
						xs={24}
						key={index}
						style={{
							...gridListStyles.colWrapper,
							flexDirection: direction,
							borderBottom: index !== data.length - 1 ? `${pxToRem(1)} solid ${grayscale400}` : "none"
						}}
					>

						<TypographyParagraph
							style={{
								fontWeight: direction === "row" ? 600 : 500,
								color: direction === "row" ?  grayscale600 : commonBlack
							}}
						>
							{item.title}
						</TypographyParagraph>
						<TypographyParagraph
							style={{
								fontWeight: direction === "row" ? 600 : 500,
								color: direction === "row" ? commonBlack : grayscale600,
								fontSize: pxToRem(16)
							}}
						>
							{item.value}
						</TypographyParagraph>
					</Col>
				))
			}
		</Row>
	);
};
