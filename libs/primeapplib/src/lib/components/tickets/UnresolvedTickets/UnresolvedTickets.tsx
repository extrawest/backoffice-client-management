import { SimpleDataList } from "@mono-redux-starter/shared/types";
import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { TypographyEnum } from "../../../types/typography";
import { Link } from "../../common/Link/Link";
import { Typography } from "../../common/Typography/Typography";
import { GridList } from "../../GridList/GridList";

export const UnresolvedTickets: FC = () => {
	const intl = useIntl();
	const ticketsData: SimpleDataList[] = [
		{
			title: intl.formatMessage({id: "waitingRequest"}),
			value: "4238"
		},
		{
			title: intl.formatMessage({id: "awaitingResponse"}),
			value: "1005"
		},
		{
			title: intl.formatMessage({id: "awaitingFix"}),
			value: "914"
		},
		{
			title: intl.formatMessage({id: "pending"}),
			value: "281"
		}
	];
	return (
		<div className="flex flex-column justify-content-between h-full">
			<div
				className="flex justify-content-between align-items-center mb-0 pt-6 px-6 pb-4"
			>
				<div className="flex flex-column gap-1 w-3/4">
					<Typography
						type={TypographyEnum.BUTTON}
						extraClasses="text-start"
					>
						<FormattedMessage id="unresolvedTickets"/>
					</Typography>
					<Typography
						type={TypographyEnum.DESCRIPTION}
						extraClasses="text-start"
					>
						<FormattedMessage
							id="group"
							values={{caption: "Support"}}
						/>
					</Typography>
				</div>
				<Link to="#">
					<FormattedMessage id="viewDetails" />
				</Link>
			</div>
			<GridList
				data={ticketsData}
				direction="row"
			/>
		</div>
	);
};
