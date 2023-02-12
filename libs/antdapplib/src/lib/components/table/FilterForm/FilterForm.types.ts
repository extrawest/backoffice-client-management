import { FilterValue } from "../TableAction/TableAction.types";

export interface FilterFormProps
{
	handleFilter: (value: FilterValue) => void,
	isFilterActive: (value: boolean) => void,
	handleClose: () => void,
	activePriority: string,
	setActivePriority: (value: string) => void
}
