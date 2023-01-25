import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { ChartWrapper } from "../../components/ChartWrapper/ChartWrapper";
import { Typography } from "../../components/common/Typography/Typography";
import { Tasks } from "../../components/tickets/Tasks/Tasks";
import { UnresolvedTickets } from "../../components/tickets/UnresolvedTickets/UnresolvedTickets";
import { TypographyEnum } from "../../types/typography";

export const DashboardContainer: FC = () => (
	<div className="mt-8">
		<div className="flex justify-between items-center mb-5">
			<Typography
				type={TypographyEnum.H5}
				extraClasses="max-w-40 w-full text-start"
			>
				<FormattedMessage id="template.dashboard" />
			</Typography>
		</div>
		<div className="flex flex-col gap-8 pb-4">
			<div
				className="h-full border-grayscale-200 border-solid border-1 rounded-md"
			>
				<ChartWrapper />
			</div>
			<div className="grid grid-cols-2 gap-x-8">

				<div
					className="border-1 border-solid border-grayscale-200"
				>
					<UnresolvedTickets />
				</div>
				<div className="border-1 border-solid border-grayscale-200">
					<Tasks />
				</div>
			</div>
		</div>
	</div>
);
