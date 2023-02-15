import { FC } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ChartDataset
} from "chart.js";
import { Chart as ChartPrime } from "primereact/chart";
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
	const currentDate = (new Date).toLocaleString();

	return (
		<div>
			<div className="flex justify-content-between align-items-end mb-6">
				<div className="flex flex-column align-items-start gap-1">
					<Typography
						type={TypographyEnum.BUTTON}
						extraClasses="text-common-black"
					>
						<FormattedMessage id="todaysTrends" />
					</Typography>
					<Typography type={TypographyEnum.SUBTITLE1}>
						<FormattedMessage
							id="asOf"
							values={{date: currentDate}}
						/>
					</Typography>
				</div>
				<ul className="max-w-25rem flex justify-content-between align-items-center gap-5">
					{data.datasets.map((
						item: ChartDataset<"line">,
						index: number
					) => (
						<li
							className="relative pl-7"
							key={index}
						>
							<span className={`absolute left-0 top-50 block transform -translate-y-50 w-3rem border-2 ${index === 0 ? "border-blue-700" : "border-gray-400"}`}/>
							<Typography
								type={TypographyEnum.DESCRIPTION}
							>
								{item["label"]}
							</Typography>
						</li>
					))}
				</ul>
			</div>
			<ChartPrime
				type="line"
				options={options}
				data={data}
			/>
		</div>
	);
};
