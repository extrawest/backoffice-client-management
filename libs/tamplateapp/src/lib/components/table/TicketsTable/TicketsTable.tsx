
import { TicketSortFields } from "@mono-redux-starter/shared/types";
import { Box } from "@mui/material";
import { GridSortItem, GridSortModel } from "@mui/x-data-grid";
import {
	FC,
	useEffect,
	useState
} from "react";
import { DefaultTable } from "../DefaultTable";
import { TableAction } from "../TableAction";
import { FilterValue } from "../TableAction/TableAction.types";
import { tableFooterSx, wrapperSx } from "./TicketsTable.styles";
import { columnConfigUsers } from "./TicketsTable.tableConfig";
import { TicketsTableProps } from "./TicketsTable.types";

export const TicketsTable: FC<TicketsTableProps> = ({ data, handleUpdateTableData, handleChangePage, handleChangeRowsNumber }) => {
	const [sortValue, setSortValue] = useState<GridSortItem>({ field: "", sort: "asc" });
	const [filterValue, setFilterValue] = useState<FilterValue>({ date: 0, priority: "" });

	useEffect(
		() => {
			handleUpdateTableData && handleUpdateTableData({
				...filterValue,
				sortAsc: sortValue ? sortValue.sort === "asc" : true,
				sortField: (sortValue && sortValue.field) || TicketSortFields.DATE
			});
		},
		[sortValue, filterValue]
	);

	return (
    <Box sx={wrapperSx}>
      <TableAction
        handleFilter={( value: FilterValue ) => setFilterValue(value)}
      />
			<DefaultTable
				rows={data}
				hideFooter
				columns={columnConfigUsers}
				handleSort={( val: GridSortModel ) => setSortValue(val[0])}
			/>
      {/* <Box sx={tableFooterSx}>
        <TableRowCounter
          handleChangeRowsNumber={handleChangeRowsNumber}
        />
        <TablePagination
          totalPages={data.totalPages}
          page={data.number}
          handleChangePage={handleChangePage}
        />
      </Box> */}
    </Box>
	);
};
