import { grayscale400 } from "@mono-redux-starter/shared/color";
import { SimpleDataList } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";
import { FC } from "react";
import { useIntl } from "react-intl";
import {
	Container,
	Grid,
	GridColumn
} from "semantic-ui-react";
import { Chart } from "../Chart/Chart";
import { GridList } from "../GridList/GridList";
import { chartWrapperStyle } from "./ChartWrapper.styles";

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
		<Container fluid>
			<Grid
				columns={2}
				style={chartWrapperStyle.wrapper}
			>
				<GridColumn
					computer={12}
					mobile={16}
					style={{
						borderRight: `${pxToRem(1)} solid ${grayscale400}`
					}}
				>
					<Chart />
				</GridColumn>
				<GridColumn
					computer={4}
					mobile={16}
					style={{
						padding: 0
					}}
				>
					<GridList
						data={trendsData}
						direction="column"
					/>
				</GridColumn>
			</Grid>
		</Container>
	);
};
