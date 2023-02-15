
import { PriorityEnum, TicketSortFields } from "@mono-redux-starter/shared/types";
import { convertToDate, convertToDateTime } from "@mono-redux-starter/shared/utils";
import { GridSortItem } from "@mui/x-data-grid";
import {
	FC,
	useEffect,
	useState
} from "react";
import { FormattedMessage } from "react-intl";
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

export const TicketsTable: FC<TicketsTableProps> = ({
	data,
	currentPage,
	totalElements,
	limit,
	handleUpdateTableData,
	handleChangePage,
	handleChangeRowsNumber
}) => {
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

	const handleSort = (field: TicketSortFields) => {
		setSortValue({
			field,
			sort: sortValue.sort === "asc" ? "desc" : "asc"
		});
	};

	return (
    <div className="w-full border-1 border-solid border-grayscale-400 rounded-lg overflow-hidden">
      <TableAction
        handleFilter={( value: FilterValue ) => setFilterValue(value)}
      />
			<div className="px-4">
				<table className="table w-full">
					<thead>
						<tr>
							<th className="text-start"></th>
							<th>
								<div className="flex items-center">
									<FormattedMessage id={"ticketDetails"} />
									<IconButton onClick={() => handleSort(TicketSortFields.NAME)}>
										{sortValue.sort === "desc" && sortValue.field === TicketSortFields.NAME ? <ArrowIcon/> : <ArrowIcon className="transform rotate-180"/>}
									</IconButton>
								</div>
							</th>
							<th className="text-start">
								<FormattedMessage id={"customerName"} />
							</th>
							<th>
								<div className="flex items-center">
									<FormattedMessage id={"date"} />
									<IconButton onClick={() => handleSort(TicketSortFields.DATE)}>
										{sortValue.sort === "desc" && sortValue.field === TicketSortFields.DATE ? <ArrowIcon/> : <ArrowIcon className="transform rotate-180"/>}
									</IconButton>
								</div>
							</th>
							<th>
								<div className="flex items-center">
									<FormattedMessage id={"priority"} />
									<IconButton onClick={() => handleSort(TicketSortFields.PRIORITY)}>
										{sortValue.sort === "desc" && sortValue.field === TicketSortFields.PRIORITY ? <ArrowIcon/> : <ArrowIcon className="transform rotate-180"/>}
									</IconButton>
								</div>
							</th>
							<th className="text-start"></th>
						</tr>
					</thead>
					<tbody>
						{
							data.map((
								item, index
							) => (
								<tr key={index}>
									<td>
										<ImageWrapper
											reference={item.reference}
											size="small"
											rounded
										/>
									</td>
									<td>
										<CellWithCaption
											mainText={item.name}
											captionFormatMessage="lastUpdated"
											caption={convertToDate(item.last_updated.seconds)}
										/>
									</td>
									<td>
										<ClientCell
											clientReference={item.reference}
										/>
									</td>
									<td>
										<CellWithCaption
											mainText={convertToDateTime(item.date.seconds).date}
											caption={convertToDateTime(item.date.seconds).time}
										/>
									</td>
									<td>
										<PriorityStatus priority={item.priority as PriorityEnum} />
									</td>
									<td>
										<DeleteTicket uid={item.uid}/>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
      <div className="flex items-center justify-end py-1 w-max ml-auto px-4 gap-3">
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
