import {
	Col,
	Row
} from "antd";
import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { ChartWrapper } from "../../components/ChartWrapper/ChartWrapper";
import { TypographyTitle } from "../../components/common/TypographyTitle/TypographyTitle";
import { Tasks } from "../../components/tickets/Tasks/Tasks";
import { UnresolvedTickets } from "../../components/tickets/UnresolvedTickets/UnresolvedTickets";
import { containerStyle } from "../containerStyle";

export const DashboardContainer: FC = () => (
	<div>
		<Row
			gutter={[8, 16]}
			justify="space-between"
			align="middle"
		>
			<TypographyTitle
				level={4}
			>
				<FormattedMessage id="template.dashboard" />
			</TypographyTitle>
		</Row>
		<Row gutter={[0, 16]}>
			<Row
				gutter={[0, 16]}
				style={containerStyle.colWrapper}
			>
				<ChartWrapper />
			</Row>
			<Row
				justify="space-between"
				align="middle"
				gutter={[0, 16]}
				style={{width: "100%"}}
			>
				<Col
					xs={24}
					md={12}
					style={containerStyle.colWrapper}
				>
					<UnresolvedTickets />
				</Col>
				<Col
					xs={24}
					md={{
						offset: 1,
						span: 11
					}}
					style={containerStyle.colWrapper}
					className="flex flex-col justify-between"
				>
					<Tasks />
				</Col>
			</Row>
		</Row>
	</div>
);
