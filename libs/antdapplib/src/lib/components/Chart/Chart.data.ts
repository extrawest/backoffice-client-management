import {
	ChartData,
	ChartOptions,
	TooltipItem,
	TooltipModel
} from "chart.js";

const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

const tooltip = (tooltipItems: TooltipItem<"line">[]) => {
	let count = 0;

	tooltipItems.forEach(function(tooltipItem) {
		count += tooltipItem.parsed.y;
	});
	return String(count);
};

export const data: ChartData<"line"> = {
	labels,
	datasets: [
		{
			label: "Today",
			data: [12, 20, 24, 28, 30, 28, 32, 38, 45, 51, 41, 27, 19, 18, 25, 36, 44, 48, 46, 42, 38],
			borderColor: "#3751FF",
			backgroundColor: "#3751FF",
			tension: 0.4,
		},
		{
			label: "Yesterday",
			data: [33, 34, 31, 26, 23, 22, 27, 32, 34, 35, 34, 31, 26, 19, 17, 22, 35, 37, 35, 29, 36],
			borderColor: "#E6E6E6",
			backgroundColor: "#E6E6E6",
			tension: 0.4,
		}
	]
};

export const options: ChartOptions<"line"> = {
	responsive: true,
	plugins: {
		legend: {
			display: false
		},
		tooltip: {
			position: "nearest",
			callbacks: {
				title: tooltip
			},

		}
	},
	scales:{
		y: {
			type: "linear",
			display: true,
			position: "right"
		},
	}
};
