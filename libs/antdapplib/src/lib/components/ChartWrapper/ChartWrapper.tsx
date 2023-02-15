import { SimpleDataList } from "@mono-redux-starter/shared/types";
import { Col } from "antd";
import { FC } from "react";
import { useIntl } from "react-intl";
import { Chart } from "../Chart/Chart";
import { GridList } from "../GridList/GridList";
import { chartStyle } from "./ChartWrapper.styles";

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
		<>
			<Col
				sm={24}
				md={18}
			>
				<div style={chartStyle.chartWrapper}>
				<Chart />
				</div>
			</Col>
			<Col
				sm={24}
				md={6}
			>
				<GridList
					data={trendsData}
					direction="column"
				/>
			</Col>
		</>
	);
};
