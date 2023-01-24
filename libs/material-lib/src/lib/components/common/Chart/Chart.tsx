import {
	Box,
	Stack,
	Typography,
} from "@mui/material";
import {
	FC,
	useEffect,
	useRef,
	useState
} from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	LegendItem
} from "chart.js";
import { Line } from "react-chartjs-2";
import { data, options } from "./Chart.data";
import { FormattedMessage } from "react-intl";
import { chartStyles, legendSx} from "./Chart.styles";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const Chart: FC = () => {
	const chart = useRef<ChartJS>(null);
	const [legends, setLegends] = useState<LegendItem[] | []>([]);
	const currentDate = (new Date).toLocaleString();
	useEffect(
		() => {
			if(!chart?.current?.legend?.legendItems){
				return;
			}
			setLegends(chart.current.legend.legendItems);
		},
		[chart]
	);

	return (
		<Box sx={chartStyles["wrapper"]}>
			<Box sx={chartStyles["headerWrapper"]}>
				<Box
					sx={chartStyles["titleWrapper"]}
				>
					<Typography variant="button">
						<FormattedMessage id="todaysTrends" />
					</Typography>
					<Typography variant="description">
						<FormattedMessage
							id="asOf"
							values={{date: currentDate}}
						/>
					</Typography>
				</Box>
				<Stack
					sx={chartStyles["legendsList"]}
				>
					{legends?.length && legends.map((
						legend: LegendItem,
						index: number
					) => (
						<Box
							key={index}
						>
							<Typography
								sx={legendSx(String(legend.fillStyle))}
								variant="description"
							>
								{legend.text}
							</Typography>
						</Box>
					))}
				</Stack>
			</Box>
			<Line
				ref={chart}
				options={options}
				data={data}
			/>
		</Box>
	);
};
