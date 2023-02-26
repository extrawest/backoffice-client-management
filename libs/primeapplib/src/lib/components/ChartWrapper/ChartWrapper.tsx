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
		<div className="grid pt-2 px-2">
			<div className="p-8 border-right-1 border-gray-200 h-full col-9">
				<Chart />
			</div>
			<div className="col-3 p-0">
				<GridList
					data={trendsData}
					direction="column"
				/>
			</div>
		</div>
	);
};
