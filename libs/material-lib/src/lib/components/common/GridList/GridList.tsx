import { SimpleDataList } from "@mono-redux-starter/shared/types";
import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import {
	gridListItemStyle,
	gridListItemTitleStyle,
	gridListItemValueStyle
} from "./GridList.styles";
import { GridListProps } from "./GridList.types";

export const GridList: FC<GridListProps> = ({
	data,
	direction = "column"
}) => {
	return (
		<Grid
			container
		>
			{
				data.map((
					item: SimpleDataList,
					index: number
				) => (
					<Grid
						sx={gridListItemStyle(direction)}
						key={index}
						item
						xs={direction === "column" ? 4 : 12}
						md={12}
					>
						<Typography
							variant="body1"
							sx={gridListItemTitleStyle(direction)}
						>
							{item.title}
						</Typography>
						<Typography
							variant="title"
							fontWeight={600}
							sx={gridListItemValueStyle(direction)}
						>
							{item.value}
						</Typography>
					</Grid>
				))
			}
		</Grid>
	);
};
