import { Tickets } from "@mono-redux-starter/shared/types";
import { ChangeEvent } from "react";

export interface TicketsTableProps {
	data: Tickets[],
	handleUpdateTableData?: (value: Tickets[]) => void,
	handleChangePage?: (page: number) => void,
	handleChangeRowsNumber?: (e: ChangeEvent<HTMLInputElement>) => void
}
