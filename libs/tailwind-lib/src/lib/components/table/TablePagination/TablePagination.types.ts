export interface TablePaginationType {
	totalPages: number,
	page: number,
	handleChangePage: (page: number) => void,
	limit: number
}
