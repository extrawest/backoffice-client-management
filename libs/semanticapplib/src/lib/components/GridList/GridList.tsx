import { commonBlack, grayscale400 } from "@mono-redux-starter/shared/color";
import { SimpleDataList } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";
import { FC } from "react";
import {
	Grid, GridColumn, List, ListItem
} from "semantic-ui-react";
import { TypographyEnum } from "../../types/typography";
import { Typography } from "../common/Typography/Typography";
import { gridListStyles } from "./GridList.styles";
import { GridListProps } from "./GridList.types";

export const GridList: FC<GridListProps> = ({
	data,
	direction = "column"
}) => {

	return (
		<div
			style={gridListStyles.gridListWrapper}
		>
			{
				data.map((
					item: SimpleDataList,
					index: number
				) => (
					<div
						key={index}
						style={{
							...(direction === "row" ? gridListStyles.gridRow : gridListStyles.gridColumn),
							borderBottom: index !== data.length - 1 ? `${pxToRem(1)} solid ${grayscale400}` : "none"
						}}
					>
						<Typography
							style={{
								fontWeight: direction === "row" ? 600 : 400
							}}
						>
							{item.title}
						</Typography>
						<Typography
							type={TypographyEnum.TITLE}
							style={{
								color: direction === "row" ? grayscale400 : commonBlack
							}}
						>
							{item.value}
						</Typography>
					</div>
				))
			}
		</div>
	);
};
