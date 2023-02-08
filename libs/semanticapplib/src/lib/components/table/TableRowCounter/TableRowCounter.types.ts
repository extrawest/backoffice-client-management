import { ChangeEventHandler } from "react";

export interface TableRowCounterType {
	handleChangeRowsNumber: (value: number) => void,
	value?: number
}
