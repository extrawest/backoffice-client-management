import { PriorityEnum, SelectValue } from "@mono-redux-starter/shared/types";
import { FormikHelpers } from "formik";

export type TicketValues = {
	name: string,
	client: string,
	priority: string | PriorityEnum
};

export type TicketFormProps = {
	isLoading: boolean;
	onSubmit: (values: TicketValues, form: FormikHelpers<TicketValues>) => void;
	processedClients: SelectValue[],
};
