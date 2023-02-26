import { SimpleDataList } from "@mono-redux-starter/shared/types";
import {
	Box,
	Grid
} from "@mui/material";
import { FC } from "react";
import { useIntl } from "react-intl";
import { Chart } from "../Chart/Chart";
import { GridList } from "../GridList/GridList";
import { chartWrapperSx } from "./ChartWrapper.styles";

export const ChartWrapper: FC = () => {
	const intl = useIntl();
	const trendsData: SimpleDataList[] = [
		{
			title: intl.formatMessage({id: "resolved"}),
			value: "449"
		},
		{
			title: intl.formatMessage({id: "received"}),
			value: "426"
		},
		{
			title: intl.formatMessage({id: "avarageFirstResponse"}),
			value: "33m"
		},
		{
			title: intl.formatMessage({id: "avarageResponse"}),
			value: "3h 8m"
		},
		{
			title: intl.formatMessage({id: "resolutionSLA"}),
			value: "94%"
		}
	];
	return (
		<Grid
			container
			spacing={0}
		>
			<Grid
				item
				xs={12}
				md={9}
			>
				<Box
					sx={chartWrapperSx}
				>
					<Chart />
				</Box>
			</Grid>
			<Grid
				item
				xs={12}
				md={3}
			>
				<GridList data={trendsData}/>
			</Grid>
		</Grid>
	);
};
