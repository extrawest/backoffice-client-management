import { Tickets, TicketSortFields } from "@mono-redux-starter/shared/types";
import { convertToDate } from "@mono-redux-starter/shared/utils";
import { ColumnsType } from "antd/es/table";
import { FormattedMessage } from "react-intl";
import { CellWithCaption } from "../../common/CellWithCaption/CellWithCaption";
import { ClientCell } from "../../common/ClientCell/ClientCell";
import { ImageWrapper } from "../../common/ImageWrapper/ImageWrapper";
import { PriorityStatus } from "../../common/PriorityStatus/PriorityStatus";
import { DeleteTicket } from "../../table/DeleteTicket/DeleteTicket";

export const columnConfigUsers: ColumnsType<Tickets> = [
	{
		title: "",
		key: "image",
		sorter: false,
		render: (value) =>
			(
				value.reference ?
				<ImageWrapper
					reference={value.reference}
					width={50}
					rounded
				/>
					: <></>
			)

	},
	{
		title: (params) => <FormattedMessage id={"ticketDetails"} />,
		key: TicketSortFields.NAME,
		sorter: true,
		render: (value) => (
			<CellWithCaption
				mainText={value.name}
				captionFormatMessage="lastUpdated"
				caption={convertToDate(value.last_updated.seconds)}
			/>
		)
	},
	{
		title: (params) => <FormattedMessage id={"customerName"} />,
		key: "userName",
		sorter: false,
		render: (value) => (
			<ClientCell
				clientReference={value.reference}
			/>
		)
	},
	{
		title: (params) => <FormattedMessage id={"date"} />,
		key: TicketSortFields.DATE,
		sorter: true,
		render: (value) => (
			<ClientCell
				clientReference={value.reference}
			/>
		)
	},
	{
		title: (params) => <FormattedMessage id={"priority"} />,
		key: TicketSortFields.PRIORITY,
		sorter: true,
		render: (value) => (
			<PriorityStatus priority={value.priority} />
		)
	},
	{
		title: "",
		key: "delete",
		sorter: false,
		render: (value) => (<DeleteTicket uid={value.uid} />)
	}
];
