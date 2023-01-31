import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { ChartWrapper } from "../../components/ChartWrapper/ChartWrapper";
import { Typography } from "../../components/common/Typography/Typography";
import { Tasks } from "../../components/tickets/Tasks/Tasks";
import { UnresolvedTickets } from "../../components/tickets/UnresolvedTickets/UnresolvedTickets";
import { TypographyEnum } from "../../types/typography";

export const DashboardContainer: FC = () => (
	<div className="mt-3">
		<div className="flex justify-content-between align-items-center mb-5">
			<Typography
				type={TypographyEnum.H4}
				extraClasses="max-w-12rem w-full text-start"
			>
				<FormattedMessage id="template.dashboard" />
			</Typography>
		</div>
		<div className="flex flex-column gap-6 pb-4">
			<div
				className="h-full border-gray-200 border-1 rounded-md"
			>
				<ChartWrapper />
			</div>
			<div className="flex justify-content-between align-items-center gap-4">
				<div
					className="border-1 border-gray-200 h-full w-6"
				>
					<UnresolvedTickets />
				</div>
				<div className="border-1 border-gray-200 h-full w-6">
					<Tasks />
				</div>
			</div>
		</div>
	</div>
);
