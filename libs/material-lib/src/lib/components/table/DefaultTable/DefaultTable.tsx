import { FC } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DefaultTableProps } from "./DefaultTable.types";
import { EmptyTable } from "../EmptyTable/EmptyTable";
import { Theme } from "@mui/material";

export const DefaultTable: FC<DefaultTableProps> = ({ rows, columns, handleSort, ...rest}) => {
	return (
    <DataGrid
      disableSelectionOnClick
      rows={rows}
      columns={columns}
      sortingMode={handleSort ? "server" : "client"}
      onSortModelChange={handleSort}
      disableColumnMenu
      components={{
        "NoRowsOverlay": EmptyTable
      }}
      {...rest}
      sx={{
        background: (theme: Theme) => theme.palette.background.default,
        minHeight: (theme: Theme) => theme.spacing(600/8),
				border: "none",
				"& .MuiDataGrid-row": {
					maxHeight: "none !important",
					padding: (theme: Theme) => theme.spacing(
						15/8,
						0
					),
					borderBottom: (theme: Theme) => `${theme.spacing(1/8)} solid ${theme.palette.grayscale[200]}`
				},
        "& .MuiDataGrid-row:hover": {
          backgroundColor: "inherit",
          boxShadow: "0px -1.75px 4px rgba(33, 33, 52, 0.039), 0px 5.75px 10px rgba(33, 33, 52, 0.12)"
        },
				"& .MuiDataGrid-columnHeader:focus": {
					outline: "none"
				},
        "& .MuiDataGrid-columnHeaderTitleContainer": {
          justifyContent: "space-between",
					fontWeight: 700,
					color: (theme: Theme) => theme.palette.grayscale[400]
        },
				"& .MuiDataGrid-cell": {
					borderBottom: "none"
				},
        "& .MuiDataGrid-cell.ampTableCell:focus": {
          outline: "none"
        },
        "& .MuiDataGrid-cellContent": {
          lineHeight: "1.2"
        },
        "& .hoverableCell button": {
          opacity: 0,
          transition: "0.3s ease",
        },
        "& .MuiDataGrid-row:hover .hoverableCell button": {
          opacity: 1
        },
        "& .MuiDataGrid-columnSeparator": {
          display: "none"
        },
        ...rest.sx,
      }}
    />
	);
};
