import { Tickets, TicketsFilterDataType } from "@mono-redux-starter/shared/types";
import { DataTableProps } from "primereact/datatable";
import { ChangeEventHandler } from "react";

export interface TicketsTableProps {
	data: Tickets[],
	totalElements: number,
	currentPage: number,
	limit: number,
	handleUpdateTableData: (value: TicketsFilterDataType) => void,
	handleChangePage: DataTableProps["onPage"],
}
