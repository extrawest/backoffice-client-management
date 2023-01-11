import { getDoc, doc } from "@firebase/firestore";
import { firestore } from "@mono-redux-starter/firebase";
import { Tickets } from "@mono-redux-starter/shared/types";
import { Box } from "@mui/material";
import { GridSortItem, GridSortModel } from "@mui/x-data-grid";
import { DocumentData } from "firebase-admin/firestore";
import {
	FC,
	useEffect,
	useState
} from "react";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { DefaultTable } from "../DefaultTable";
import { tableFooterSx, wrapperSx } from "./TicketsTable.styles";
import { columnConfigUsers } from "./TicketsTable.tableConfig";
import { TicketsTableProps } from "./TicketsTable.types";

export const TicketsTable: FC<TicketsTableProps> = ({ data, handleUpdateTableData, handleChangePage, handleChangeRowsNumber }) => {
	const [sortValue, setSortValue] = useState<GridSortItem>({ field: "", sort: "asc" });

	// useEffect(() => {
	// 	const data: UsersSearchRequestData = {
	// 		businessId: filterValue.businessId,
	// 		sortAsc: sortValue ? sortValue.sort === "asc" : true,
	// 		sortField: (sortValue && sortValue.field) || UsersSortFieldEnum.EMAIL
	// 	}
	// 	handleUpdateTableData(data)
	// },
	// [sortValue]
	// );

	return (
    <Box sx={wrapperSx}>
      {/* <UsersTableActions
        handleFilter={( value: UsersFilterValue ) => setFilterValue(value)}
      /> */}
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
