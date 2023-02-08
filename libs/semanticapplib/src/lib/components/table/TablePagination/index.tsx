import {
	FC,
	useEffect,
	useMemo,
	useState
} from "react";
import { Pagination, PaginationProps } from "semantic-ui-react";
import { TablePaginationType } from "./TablePagination.types";

export const TablePagination: FC<TablePaginationType> = ({ totalPages, page, handleChangePage, limit }) => {
	const [currentPage, setCurrentPage] = useState<number>(1);

	useEffect(
		() => {
			setCurrentPage(page + 1);
		},
		[page]
	);
	const changeCurrentPage: PaginationProps["onPageChange"] = (
		e, data
	) => {
		if(data.activePage){
			setCurrentPage(+data.activePage);
			handleChangePage(+data.activePage - 1);
		}
	};
	return (
		<Pagination
			activePage={currentPage}
			onPageChange={changeCurrentPage}
			totalPages={totalPages}
		/>
	);
};
