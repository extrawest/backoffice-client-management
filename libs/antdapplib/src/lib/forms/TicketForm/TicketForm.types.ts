import { PriorityEnum, SelectValue } from "@mono-redux-starter/shared/types";

export type TicketValues = {
	name: string,
	client: string,
	priority: string | PriorityEnum
};

export type TicketFormProps = {
	isLoading: boolean;
	onSubmit: (values: TicketValues) => void;
	processedClients: SelectValue[],
};
