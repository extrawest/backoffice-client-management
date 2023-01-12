import { TicketSortFields } from "@mono-redux-starter/shared/types";
import { convertToDate, convertToDateTime } from "@mono-redux-starter/shared/utils";
import { GridColumns } from "@mui/x-data-grid";
import { FormattedMessage } from "react-intl";
import { CellWithCaption } from "../../common/CellWithCaption/CellWithCaption";
import { ClientCell } from "../../common/ClientCell/ClientCell";
import { ImageWrapper } from "../../common/ImageWrapper/ImageWrapper";
import { PriorityStatus } from "../../common/PriorityStatus/PriorityStatus";

export const columnConfigUsers: GridColumns = [
	{
		field: "image",
		headerName: "",
		flex: 1,
		sortable: false,
		minWidth: 80,
		renderCell: (params) => (
			params.row.reference ?
			<ImageWrapper
				reference={params.row.reference}
				size={50}
				rounded
			/>
				: <></>
		)
	},
	{
		field: TicketSortFields.NAME,
		renderHeader: (params) => <FormattedMessage id={"ticketDetails"} />,
		flex: 5,
		minWidth: 200,
		renderCell: (params) => (
			<CellWithCaption
				mainText={params.row.name}
				captionFormatMessage="lastUpdated"
				caption={convertToDate(params.row.last_updated.seconds)}
			/>
		)
	},
	{
		field: "customerName",
		renderHeader: (params) => <FormattedMessage id={"customerName"} />,
		flex: 3,
		minWidth: 120,
		sortable: false,
		renderCell: (params) => (
			<ClientCell
				clientReference={params.row.reference}
			/>
		)
	},
	{
		field: TicketSortFields.DATE,
		renderHeader: (params) => <FormattedMessage id={"date"} />,
		flex: 3,
		minWidth: 120,
		renderCell: (params) => {
			const dateTime = convertToDateTime(params.row.date.seconds);
			return (
			<CellWithCaption
				mainText={dateTime.date}
				caption={dateTime.time}
			/>
			);
		}
	},
	{
		field: TicketSortFields.PRIORITY,
		renderHeader: (params) => <FormattedMessage id={"priority"} />,
		flex: 2,
		minWidth: 120,
		renderCell: (params) => {
			return(
				<PriorityStatus priority={params.row.priority} />
			);
		}
	},
	{
		field: "actions",
		headerName: "",
		flex: 1,
		sortable: false,
		minWidth: 80,
		renderCell: (params) => (<>123</>)
	}
];
