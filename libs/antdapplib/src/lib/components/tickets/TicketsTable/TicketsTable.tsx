
import { Tickets } from "@mono-redux-starter/shared/types";
import {
	FC,
	useEffect,
	useState
} from "react";
import { TableAction } from "../../table/TableAction";
import { FilterValue } from "../../table/TableAction/TableAction.types";
import { TicketsTableProps } from "./TicketsTable.types";
import {
	Col,
	Divider,
	Table,
	TableProps
} from "antd";
import { columnConfigUsers } from "./TicketsTable.tableConfig";
import { SorterResult } from "antd/es/table/interface";

export const TicketsTable: FC<TicketsTableProps> = ({
	data,
	currentPage,
	totalElements,
	limit,
	handleRecallClients,
	handleUpdateTableData,
	handleChangePage,
}) => {

	const [sortValue, setSortValue] = useState<SorterResult<Tickets>>({ columnKey: "", order: "ascend" });
	const [filterValue, setFilterValue] = useState<FilterValue>({ priority: "" });
	useEffect(
		() => {
			handleUpdateTableData({
				...filterValue,
				sortAsc: sortValue ? sortValue.order === "ascend" : true,
				sortField: (sortValue && sortValue.columnKey) ?? ""
			});
		},
		[sortValue, filterValue]
	);

	const handleChange: TableProps<Tickets>["onChange"] = (
		pagination, filters, sorter
	) => {
		setSortValue(sorter as SorterResult<Tickets>);
		handleChangePage(
			pagination.current,
			pagination.pageSize
		);
	};

	return (
    <Col>
      <TableAction
				handleRecallClients={handleRecallClients}
        handleFilter={( value: FilterValue ) => setFilterValue(value)}
      />
			<Divider
				type="vertical"
			/>
			<Table
				columns={columnConfigUsers}
				dataSource={data}
				size="middle"
				onChange={handleChange}
			/>
    </Col>
	);
};
