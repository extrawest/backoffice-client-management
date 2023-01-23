import { Pagination } from "@mui/material";
import {
	FC,
	useEffect,
	useState
} from "react";
import { TablePaginationType } from "./TablePagination.types";
import { paginationWrapperSx } from "./TablePagintaion.styles";

export const TablePagination: FC<TablePaginationType> = ({ totalPages, page, handleChangePage }) => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	useEffect(
		() => {
			setCurrentPage(page + 1);
		},
		[page]
	);
	const changeCurrentPage = (
		event: React.ChangeEvent<unknown>, value: number
	) => {
		setCurrentPage(value);
		handleChangePage(value - 1);
	};
	return (
    <Pagination
			sx={paginationWrapperSx}
      color="primary"
      count={totalPages}
      page={currentPage}
      onChange={changeCurrentPage}
    />
	);
};
