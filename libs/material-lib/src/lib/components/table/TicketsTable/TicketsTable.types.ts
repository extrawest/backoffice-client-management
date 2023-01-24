import { Tickets, TicketsFilterDataType } from "@mono-redux-starter/shared/types";
import { SelectProps } from "@mui/material";
import { ChangeEvent } from "react";

export interface TicketsTableProps {
	data: Tickets[],
	totalElements: number,
	currentPage: number,
	limit: number,
	handleUpdateTableData: (value: TicketsFilterDataType) => void,
	handleChangePage: (page: number) => void,
	handleChangeRowsNumber?: SelectProps["onChange"]
}
