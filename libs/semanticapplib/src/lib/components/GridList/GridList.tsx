import { grayscale400 } from "@mono-redux-starter/shared/color";
import { SimpleDataList } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";
import { FC } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { TypographyEnum } from "../../types/typography";
import { Typography } from "../common/Typography/Typography";
import { gridListStyles } from "./GridList.styles";

import { GridListProps } from "./GridList.types";

export const GridList: FC<GridListProps> = ({
	data,
	direction = "column"
}) => {
	return (
		<Grid
			columns={direction === "row" ? "equal" : 1}
			style={gridListStyles.gridListWrapper}
		>
			{
				data.map((
					item: SimpleDataList,
					index: number
				) => (
					<GridColumn
						key={index}
						style={{
							...gridListStyles.gridColumn(direction),
							borderBottom: index !== data.length - 1 ? `${pxToRem(1)} solid ${grayscale400}` : "none"
						}}
					>
						<Typography
							style={gridListStyles.title(direction)}
						>
							{item.title}
						</Typography>
						<Typography
							type={TypographyEnum.TITLE}
							style={gridListStyles.value(direction)}
						>
							{item.value}
						</Typography>
					</GridColumn>
				))
			}
		</Grid>
	);
};
