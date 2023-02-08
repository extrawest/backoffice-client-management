import {
	FC,
	useEffect,
	useMemo,
	useState
} from "react";
import { TablePaginationType } from "./TablePagination.types";

export const TablePagination: FC<TablePaginationType> = ({ totalPages, page, handleChangePage, limit }) => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const pages = useMemo(
		() => {
			const arr = [];
			for(let i = 0; i < totalPages; i++){
				arr.push(i);
			}
			return arr;
		},
		[totalPages]
	);
	useEffect(
		() => {
			setCurrentPage(page + 1);
		},
		[page]
	);
	const changeCurrentPage = (value: number) => {
		setCurrentPage(value);
		handleChangePage(value - 1);
	};
	return (
		<div className="w-max flex justify-content-center gap-2">
			{pages.map(value => (
				<span
					key={value}
					className={`${value + 1 === currentPage ? "bg-blue-600 pointer-events-none" : "bg-gray-400 cursor-pointer"} text-common-white rounded-circle font-medium w-8 h-8 flex align-items-center justify-content-center`}
					onClick={() => changeCurrentPage(value + 1)}
				>
					{value + 1}
				</span>
			))}
		</div>
	);
};
