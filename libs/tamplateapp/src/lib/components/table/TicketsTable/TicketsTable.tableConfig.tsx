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
		minWidth: 80,
		sortable: false,
		cellClassName: "ampTableCell",
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
		field: "ticketDetails",
		renderHeader: (params) => <FormattedMessage id={"ticketDetails"} />,
		flex: 5,
		minWidth: 200,
		sortable: false,
		cellClassName: "ampTableCell",
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
		cellClassName: "ampTableCell",
		renderCell: (params) => (
			<ClientCell
				clientReference={params.row.reference}
			/>
		)
	},
	{
		field: "date",
		renderHeader: (params) => <FormattedMessage id={"date"} />,
		flex: 3,
		minWidth: 120,
		sortable: false,
		cellClassName: "ampTableCell",
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
		field: "priority",
		renderHeader: (params) => <FormattedMessage id={"priority"} />,
		flex: 2,
		minWidth: 120,
		sortable: false,
		cellClassName: "ampTableCell",
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
		minWidth: 80,
		sortable: false,
		cellClassName: "ampTableCell",
		renderCell: (params) => (<>123</>)
	}
];
