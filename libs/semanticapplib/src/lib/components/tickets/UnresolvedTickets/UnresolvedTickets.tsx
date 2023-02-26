import { SimpleDataList } from "@mono-redux-starter/shared/types";
import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { TypographyEnum } from "../../../types/typography";
import { Link } from "../../common/Link/Link";
import { Typography } from "../../common/Typography/Typography";
import { GridList } from "../../GridList/GridList";
import { ticketsStyle } from "./UnresolvedTickets.styles";

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
		<div style={ticketsStyle.wrapper}>
			<div
				style={ticketsStyle.titleWrapper}
			>
				<div style={ticketsStyle.title}>
					<Typography
						type={TypographyEnum.BUTTON}
						textAlign="start"
					>
						<FormattedMessage id="unresolvedTickets"/>
					</Typography>
					<Typography
						type={TypographyEnum.DESCRIPTION}
						textAlign="start"
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
