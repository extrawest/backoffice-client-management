import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { TableRowCounterType } from "./TableRowCounter.types";
import { Typography } from "../../common/Typography/Typography";

export const TableRowCounter: FC<TableRowCounterType> = ({handleChangeRowsNumber, value = 10}) => {

	return (
    <div className="flex items-center gap-2.5">
      <Typography>
        <FormattedMessage id="rowsPerPage" />
      </Typography>
      <select
				id={"rows"}
				name={"rows"}
				onChange={handleChangeRowsNumber}
				className="outline-none p-1 w-12 h-10 rounded-md"
      >
				<option value={10}>10</option>
				<option value={20}>20</option>
				<option value={50}>50</option>
      </select>
    </div>
	);
};
