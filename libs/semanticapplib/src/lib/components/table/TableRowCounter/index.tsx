import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { TableRowCounterType } from "./TableRowCounter.types";
import { Typography } from "../../common/Typography/Typography";
import { Dropdown, DropdownProps } from "semantic-ui-react";
import { counterWrapperSx } from "./TableRowCounter.sx";

export const TableRowCounter: FC<TableRowCounterType> = ({handleChangeRowsNumber, value = 10}) => {
	const countValues = [
		{
			key: 0,
			value: 10,
			text: 10
		},
		{
			key: 1,
			value: 20,
			text: 20
		},
		{
			key: 2,
			value: 50,
			text: 50
		},
	];
	const handleChange: DropdownProps["onChange"] = (
		e, data
	) => {
		data.value && handleChangeRowsNumber(Number(data.value));
	};
	return (
    <div style={counterWrapperSx.wrapper}>
      <Typography>
        <FormattedMessage id="rowsPerPage" />
      </Typography>
			<Dropdown
				style={counterWrapperSx.dropdown}
				options={countValues}
				selection
				defaultValue={10}
				onChange={handleChange}
			/>
    </div>
	);
};
