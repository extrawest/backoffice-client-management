import { ChangeEventHandler } from "react";

export interface TableRowCounterType {
	handleChangeRowsNumber: ChangeEventHandler<HTMLSelectElement>,
	value?: number
}
