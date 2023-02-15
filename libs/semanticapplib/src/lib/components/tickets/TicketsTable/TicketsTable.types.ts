import { Tickets, TicketsFilterDataType } from "@mono-redux-starter/shared/types";

export interface TicketsTableProps {
	data: Tickets[],
	totalElements: number,
	currentPage: number,
	limit: number,
	handleUpdateTableData: (value: TicketsFilterDataType) => void,
	handleChangePage: (page: number) => void,
	handleChangeRowsNumber: (value: number) => void,
}
