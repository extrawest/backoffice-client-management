import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { Container } from "semantic-ui-react";
import { ChartWrapper } from "../../components/ChartWrapper/ChartWrapper";
import { Typography } from "../../components/common/Typography/Typography";
import { Tasks } from "../../components/tickets/Tasks/Tasks";
import { UnresolvedTickets } from "../../components/tickets/UnresolvedTickets/UnresolvedTickets";
import { TypographyEnum } from "../../types/typography";
import { dashboardStyle } from "./DashboardContainer.styles";

export const DashboardContainer: FC = () => (
	<Container fluid>
		<div style={dashboardStyle.titleWrapper}>
			<Typography
				type={TypographyEnum.H5}
			>
				<FormattedMessage id="template.dashboard" />
			</Typography>
		</div>
		<div style={dashboardStyle.dashboardWrapper}>
			<ChartWrapper />
			<div style={dashboardStyle.cardsWrapper}>
				<div
					style={dashboardStyle.card}
				>
					<UnresolvedTickets />
				</div>
				<div
					style={dashboardStyle.card}
				>
					<Tasks />
				</div>
			</div>
		</div>
	</Container>
);
