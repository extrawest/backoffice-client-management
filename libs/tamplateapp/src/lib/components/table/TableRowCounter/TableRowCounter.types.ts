import { SelectProps } from "@mui/material";

export interface TableRowCounterType {
	handleChangeRowsNumber: SelectProps["onChange"],
	value?: number
}
