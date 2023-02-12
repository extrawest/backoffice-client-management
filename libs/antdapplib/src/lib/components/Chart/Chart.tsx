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
import { TypographyTitle } from "../common/TypographyTitle/TypographyTitle";
import { TypographyParagraph } from "../common/TypographyParagraph/TypographyParagraph";
import { Col, Row } from "antd";

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
				<Col
					xs={24}
					md={12}
					style={chartStyles.title}
				>
					<TypographyTitle
						level={3}
					>
						<FormattedMessage id="todaysTrends" />
					</TypographyTitle>
					<TypographyParagraph>
						<FormattedMessage
							id="asOf"
							values={{date: currentDate}}
						/>
					</TypographyParagraph>
				</Col>
				<Col
					style={chartStyles.legendsList}
					xs={24}
					md={12}
				>
					{legends?.length && legends.map((
						legend: LegendItem,
						index: number
					) => (
						<Col
							key={index}
							span={24 / legends.length}
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
						</Col>
					))}
				</Col>
			</div>
			<Line
				ref={chart}
				options={options}
				data={data}
			/>
		</Container>
	);
};
