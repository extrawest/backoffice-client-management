import {
	GridRowsProp,
	GridColDef,
	GridSortModel,
	GridCallbackDetails,
	DataGridProps
} from "@mui/x-data-grid";
import { JSXElementConstructor, ReactElement } from "react";

export interface DefaultTableProps extends DataGridProps {
	rows: GridRowsProp,
	columns: GridColDef[],
	handleSort?: (model: GridSortModel, details: GridCallbackDetails<any>) => void,
	rowsPerPageOptions?: number[],
	hideFooter?: boolean,
}
