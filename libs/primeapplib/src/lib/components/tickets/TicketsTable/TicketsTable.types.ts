import { Tickets, TicketsFilterValue } from "@mono-redux-starter/shared/types";
import { DataTableProps } from "primereact/datatable";

export interface TicketsTableProps {
	data: Tickets[],
	totalElements: number,
	currentPage: number,
	limit: number,
	handleUpdateTableData: (value: TicketsFilterValue) => void,
	handleChangePage: DataTableProps["onPage"],
}
