import { PriorityEnum } from "@mono-redux-starter/shared/types";

export interface TableActionProps {
	handleRecallClients: () => void,
	handleFilter: (value: FilterValue) => void,
}

export interface FilterValue {
	priority: string | PriorityEnum
}
