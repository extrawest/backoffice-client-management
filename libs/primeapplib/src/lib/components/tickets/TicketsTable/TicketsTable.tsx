
import { TicketSortFields } from "@mono-redux-starter/shared/types";
import { convertToDate, convertToDateTime } from "@mono-redux-starter/shared/utils";
import { GridSortItem, GridSortModel } from "@mui/x-data-grid";
import {
	FC,
	useEffect,
	useState
} from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Item } from "semantic-ui-react";
import { ArrowIcon } from "../../../icons";
import { CellWithCaption } from "../../common/CellWithCaption/CellWithCaption";
import { ClientCell } from "../../common/ClientCell/ClientCell";
import { IconButton } from "../../common/IconButton/IconButton";
import { ImageWrapper } from "../../common/ImageWrapper/ImageWrapper";
import { PriorityStatus } from "../../common/PriorityStatus/PriorityStatus";
import { DeleteTicket } from "../../table/DeleteTicket/DeleteTicket";
import { TableAction } from "../../table/TableAction";
import { FilterValue } from "../../table/TableAction/TableAction.types";
import { TablePagination } from "../../table/TablePagination";
import { TableRowCounter } from "../../table/TableRowCounter";
import { TicketsTableProps } from "./TicketsTable.types";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export const TicketsTable: FC<TicketsTableProps> = ({
	data,
	currentPage,
	totalElements,
	limit,
	handleUpdateTableData,
	handleChangePage,
}) => {
	const intl = useIntl();

	const [sortValue, setSortValue] = useState<GridSortItem>({ field: "", sort: "asc" });
	const [filterValue, setFilterValue] = useState<FilterValue>({ priority: "" });
	useEffect(
		() => {
			handleUpdateTableData({
				...filterValue,
				sortAsc: sortValue ? sortValue.sort === "asc" : true,
				sortField: (sortValue && sortValue.field) || TicketSortFields.DATE
			});
		},
		[sortValue, filterValue]
	);

	return (
    <div className="w-full border-1 border-solid border-gray-400 rounded-lg overflow-hidden">
      <TableAction
        handleFilter={( value: FilterValue ) => setFilterValue(value)}
      />
			<DataTable
				value={data}
				selectionMode="single"
				paginator
				totalRecords={totalElements}
				rowsPerPageOptions={[5,10,20]}
				first={limit * currentPage}
				rows={limit}
				onPage={handleChangePage}
			>
				<Column
					field=""
					body={(
						columnData, options
					) => (
						<ImageWrapper
							reference={columnData.reference}
							size="small"
							rounded
						/>
					)}
				/>
				<Column
					field="name"
					sortable
					header={intl.formatMessage({id: "ticketDetails"})}
					body={(
						columnData, options
					) => (
							<CellWithCaption
								mainText={columnData.name}
								captionFormatMessage="lastUpdated"
								caption={convertToDate(columnData.last_updated.seconds)}
							/>
					)}
				/>
				<Column
					field="reference"
					sortable
					header={intl.formatMessage({id: "customerName"})}
					body={(
						columnData, options
					) => (
						<ClientCell
							clientReference={columnData.reference}
						/>
					)}
				/>
				<Column
					field="date"
					sortable
					header={intl.formatMessage({id: "date"})}
					body={(
						columnData, options
					) => (
						<CellWithCaption
							mainText={convertToDateTime(columnData.date.seconds).date}
							caption={convertToDateTime(columnData.date.seconds).time}
						/>
					)}
				>
				</Column>
				<Column
					field="priority"
					sortable
					header={intl.formatMessage({id: "priority"})}
					body={(
						columnData, options
					) => (
						<PriorityStatus priority={columnData.priority} />
					)}
				>
				</Column>
				<Column
					field=""
					body={(
						columnData, options
					) => (
						<DeleteTicket uid={columnData.uid}/>
					)}
				/>
			</DataTable>
      {/* <div className="flex align-items-center justify-content-end py-1 w-max ml-auto px-4">
        <TableRowCounter
          handleChangeRowsNumber={handleChangeRowsNumber}
        />

      </div> */}
    </div>
	);
};
