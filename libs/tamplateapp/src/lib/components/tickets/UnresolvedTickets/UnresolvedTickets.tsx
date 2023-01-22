import { SimpleDataList } from "@mono-redux-starter/shared/types";
import {
	Box,
	Typography
} from "@mui/material";
import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { commonContainers } from "../../../containers/commonContainers.styles";
import Button from "../../common/Button/Button";
import { GridList } from "../../common/GridList/GridList";
import { unresolvedTicketsStyles } from "./UnresolvedTickets.styles";

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
		<Box sx={unresolvedTicketsStyles["wrapper"]}>
			<Box
				sx={{
					...commonContainers["titleWrapperSx"],
					...unresolvedTicketsStyles["ticketsWrapper"]
				}}
			>
				<Box sx={unresolvedTicketsStyles["titleWrapper"]}>
					<Typography
						variant="button"
					>
						<FormattedMessage id="unresolvedTickets"/>
					</Typography>
					<Typography variant="description">
						<FormattedMessage
							id="group"
							values={{caption: "Support"}}
						/>
					</Typography>
				</Box>
				<Button outlined>
					<FormattedMessage id="viewDetails" />
				</Button>
			</Box>
			<GridList
				data={ticketsData}
				direction="row"
			/>
		</Box>
	);
};
