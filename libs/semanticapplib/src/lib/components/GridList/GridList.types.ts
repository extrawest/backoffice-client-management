import { SimpleDataList } from "@mono-redux-starter/shared/types";

export interface GridListProps {
	data: SimpleDataList[],
	direction?: "row" | "column"
}
