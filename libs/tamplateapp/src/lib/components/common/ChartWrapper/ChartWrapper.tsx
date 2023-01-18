import {
	Box,
	Grid,
	Typography
} from "@mui/material";
import { FC } from "react";
import { useIntl } from "react-intl";
import { Chart } from "../Chart/Chart";
import { chartWrapper } from "./ChartWrapper.styles";

interface TrendsDataType {
	value: string,
	title: string
}

export const ChartWrapper: FC = () => {
	const intl = useIntl();
	const trendsData: TrendsDataType[] = [
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
					sx={chartWrapper["chart"]}
				>
					<Chart />
				</Box>
			</Grid>
			<Grid
				container
				item
				xs={12}
				md={3}
			>
				{
					trendsData.map((
						item: TrendsDataType,
						index: number
					) => (
						<Grid
							sx={chartWrapper["chartDataItem"]}
							key={index}
							item
							xs={4}
							md={12}
						>
							<Typography
								variant="body1"
								color="grayscale.400"
								fontWeight={600}
							>
								{item.title}
							</Typography>
							<Typography variant="title">
								{item.value}
							</Typography>
						</Grid>
					))
				}
			</Grid>
		</Grid>
	);
};
