import { FC } from "react";
import {
	Box,
	MenuItem,
	Select,
	Typography
} from "@mui/material";
import { FormattedMessage } from "react-intl";
import { TableRowCounterType } from "./TableRowCounter.types";
import { counterWrapperSx, rowsSelectSx } from "./TableRowCounter.sx";
import { KeyboardArrowDown } from "@mui/icons-material";

export const TableRowCounter: FC<TableRowCounterType> = ({handleChangeRowsNumber, value = 10}) => {

	return (
    <Box sx={counterWrapperSx}>
      <Typography variant="body1">
        <FormattedMessage id="rowsPerPage" />
      </Typography>
      <Select
				id={"rows"}
				name={"rows"}
				IconComponent={KeyboardArrowDown}
				onChange={handleChangeRowsNumber}
				value={value}
				sx={rowsSelectSx}
      >
				<MenuItem value={10}>10</MenuItem>
				<MenuItem value={20}>20</MenuItem>
				<MenuItem value={50}>50</MenuItem>
      </Select>
    </Box>
	);
};
