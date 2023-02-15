import { SimpleDataList } from "@mono-redux-starter/shared/types";
import { FC } from "react";
import { useIntl } from "react-intl";
import { Chart } from "../Chart/Chart";
import { GridList } from "../GridList/GridList";

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
		<div className="grid grid-cols-9/3">
			<div className="p-8 border-r-1 border-r-grayscale-200 border-solid h-full">
				<Chart />
			</div>
			<GridList
				data={trendsData}
				direction="column"
			/>
		</div>
	);
};
