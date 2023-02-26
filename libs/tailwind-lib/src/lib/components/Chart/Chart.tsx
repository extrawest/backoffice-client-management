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
		<div>
			<div className="flex justify-between items-end mb-6">
				<div className="flex flex-col items-start gap-1">
					<Typography
						type={TypographyEnum.BUTTON}
						extraClasses="text-common-black"
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
				<ul className="max-w-50 flex justify-between items-center gap-5">
					{legends?.length && legends.map((
						legend: LegendItem,
						index: number
					) => (
						<li
							className="relative pl-7"
							key={index}
						>
							<span className={`absolute left-0 top-2/4 block transform -translate-y-2/4 w-5 h-1 ${index === 0 ? "bg-chart-1" : "bg-grayscale-400"} content-auto`}/>
							<Typography
								type={TypographyEnum.DESCRIPTION}
							>
								{legend.text}
							</Typography>
						</li>
					))}
				</ul>
			</div>
			<Line
				ref={chart}
				options={options}
				data={data}
			/>
		</div>
	);
};
