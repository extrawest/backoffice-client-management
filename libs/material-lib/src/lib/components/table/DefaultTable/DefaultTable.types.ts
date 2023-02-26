import {
	GridRowsProp,
	GridColDef,
	GridSortModel,
	GridCallbackDetails,
	DataGridProps
} from "@mui/x-data-grid";

export interface DefaultTableProps extends DataGridProps {
	rows: GridRowsProp,
	columns: GridColDef[],
	handleSort?: (model: GridSortModel, details: GridCallbackDetails<"filter">) => void,
	rowsPerPageOptions?: number[],
	hideFooter?: boolean,
}
