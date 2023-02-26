
import { TicketSortFields } from "@mono-redux-starter/shared/types";
import { convertToDate, convertToDateTime } from "@mono-redux-starter/shared/utils";
import {
	FC,
	useState
} from "react";
import { FormattedMessage } from "react-intl";
import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableHeaderCell,
	TableRow
} from "semantic-ui-react";
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
import { tableStyles } from "./TicketsTable.styles";
import { TicketsTableProps } from "./TicketsTable.types";

export const TicketsTable: FC<TicketsTableProps> = ({
	data,
	currentPage,
	totalElements,
	limit,
	handleUpdateTableData,
	handleChangePage,
	handleChangeRowsNumber,
	handleRecallClients
}) => {
	const [sortValue, setSortValue] = useState({ field: "", sort: "asc" });
	const [filterValue, setFilterValue] = useState<FilterValue>({ priority: "" });

	const handleUpdate = () => {
		handleUpdateTableData({
			...filterValue,
			sortAsc: sortValue ? sortValue.sort === "asc" : true,
			sortField: sortValue.field ?? ""
		});
	};

	const handleFilter = (value: FilterValue) => {
		setFilterValue(value);
		handleUpdate();
	};

	const handleSort = (field: TicketSortFields) => {
		setSortValue({
			field,
			sort: sortValue.sort === "asc" ? "desc" : "asc"
		});
		handleUpdate();
	};

	return (
    <div style={tableStyles.wrapper}>
      <TableAction
        handleFilter={handleFilter}
				handleRecallClients={handleRecallClients}
      />
			<Table
				singleLine
				sortable
				fixed
				style={{
					border: "none",
				}}
			>
				<TableHeader>
					<TableRow >
						<TableHeaderCell></TableHeaderCell>
						<TableHeaderCell>
							<FormattedMessage id={"ticketDetails"} />
						</TableHeaderCell>
						<TableHeaderCell>
							<div
								style={tableStyles.cell}
							>
								<FormattedMessage id={"customerName"} />
								<IconButton
									onClick={() => handleSort(TicketSortFields.DATE)}
									icon={sortValue.sort === "desc" && sortValue.field === TicketSortFields.DATE ? "arrow up" : "arrow down"}
								/>
							</div>
						</TableHeaderCell>
						<TableHeaderCell>
							<div
								style={tableStyles.cell}
							>
								<FormattedMessage id={"date"} />
								<IconButton
									onClick={() => handleSort(TicketSortFields.PRIORITY)}
									icon={sortValue.sort === "desc" && sortValue.field === TicketSortFields.PRIORITY ? "arrow up" : "arrow down"}
								/>
							</div>
						</TableHeaderCell>
						<TableHeaderCell>
							<FormattedMessage id={"priority"} />
						</TableHeaderCell>
						<TableHeaderCell></TableHeaderCell>
					</TableRow>
				</TableHeader>
				<TableBody>
					{
						data.map((
							item, index
						) => (
							<TableRow key={index}>
								<TableCell>
									<ImageWrapper
										reference={item.reference}
										size="small"
										rounded
									/>
								</TableCell>
								<TableCell>
									<CellWithCaption
										mainText={item.name}
										captionFormatMessage="lastUpdated"
										caption={convertToDate(item.last_updated.seconds)}
									/>
								</TableCell>
								<TableCell>
									<ClientCell
										clientReference={item.reference}
									/>
								</TableCell>
								<TableCell>
									<CellWithCaption
										mainText={convertToDateTime(item.date.seconds).date}
										caption={convertToDateTime(item.date.seconds).time}
									/>
								</TableCell>
								<TableCell>
									<PriorityStatus priority={item.priority} />
								</TableCell>
								<TableCell>
									<DeleteTicket uid={item.uid}/>
								</TableCell>
							</TableRow>
						))
					}
				</TableBody>
			</Table>
      <div style={tableStyles.paginationWrapper}>
        <TableRowCounter
          handleChangeRowsNumber={handleChangeRowsNumber}
        />
        <TablePagination
          totalPages={Math.ceil(totalElements/limit)}
          page={currentPage}
          handleChangePage={handleChangePage}
					limit={limit}
        />
      </div>
    </div>
	);
};
