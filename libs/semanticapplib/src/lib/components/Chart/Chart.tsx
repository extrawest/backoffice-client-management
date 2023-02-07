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
import { Typography } from "../common/Typography/Typography";
import { TypographyEnum } from "../../types/typography";
import {
	Container,
	List,
	ListContent,
	ListItem
} from "semantic-ui-react";
import { chartStyles } from "./Chart.styles";
import { chart1, grayscale400 } from "@mono-redux-starter/shared/color";

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
		<Container
			fluid
		>
			<div style={chartStyles.titleWrapper}>
				<div style={chartStyles.title}>
					<Typography
						type={TypographyEnum.BUTTON}
					>
						<FormattedMessage id="todaysTrends" />
					</Typography>
					<Typography type={TypographyEnum.DESCRIPTION}>
						<FormattedMessage
							id="asOf"
							values={{date: currentDate}}
						/>
					</Typography>
				</div>
				<List
					horizontal
					style={chartStyles.legendsList}
				>
					{legends?.length && legends.map((
						legend: LegendItem,
						index: number
					) => (
						<ListItem
							key={index}
							style={chartStyles.legend}
						>
							<span
								style={{
									...chartStyles.legendColor,
									background: index === 0 ? chart1 : grayscale400
								}}
							/>
							<ListContent>
								<Typography
									type={TypographyEnum.DESCRIPTION}
								>
									{legend.text}
								</Typography>
							</ListContent>
						</ListItem>
					))}
				</List>
			</div>
			<Line
				ref={chart}
				options={options}
				data={data}
			/>
		</Container>
	);
};
