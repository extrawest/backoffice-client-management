import { SelectValue } from "@mono-redux-starter/shared/types";
import { KeyboardArrowDown } from "@mui/icons-material";
import {
	Box,
	FormControl,
	MenuItem,
	Select,
	Typography
} from "@mui/material";
import { FC } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import { PriorityStatus } from "../PriorityStatus/PriorityStatus";
import {
	containerSx,
	descriptionSx,
	menuItemSx,
	placeholderSx,
	placeholderWrapperSx,
	selectSx
} from "./FormSelect.sx";
import { SelectInputProps } from "./FormSelect.types";

export const FormSelect: FC<SelectInputProps> = ({
	input,
	hasError,
	helperText,
	data,
	label,
	onChange,
	onClick,
	onBlur,
	defaultValue,
	description,
	disabled,
	value,
	placeholder = "select",
	...rest
}) => {
	const intl = useIntl();

	const inputIsPriority = input === "priority";

	return (
    <FormControl
      fullWidth
      variant="outlined"
      error={!!hasError}
      margin="normal"
      sx={containerSx}
    >
      {label && (
				<Typography
					variant="caption"
					fontWeight="600"
				>
					{label}
				</Typography>
      )}
      <Box sx={placeholderWrapperSx}>
        {!value && (
          <Typography
            sx={placeholderSx}
            variant="body1"
          >
            <FormattedMessage id={placeholder} />
          </Typography>
        )}
        <Select
          labelId={input}
          id={input}
          name={input}
          IconComponent={KeyboardArrowDown}
          onChange={onChange}
          onBlur={onBlur}
          defaultValue={data.length ? data[0].value : ""}
          value={data.length ? value : ""}
          disabled={!data.length || disabled}
          sx={selectSx}
        >
          {data?.length && data?.map((item: SelectValue) => {
            return (
              <MenuItem
                key={item.id}
                value={item.value}
								sx={menuItemSx}
              >
                {inputIsPriority && (
                  <PriorityStatus
                    priority={item.name}
                  />
                )}
                {!inputIsPriority && item.name}
              </MenuItem>
            );})}
        </Select>
      </Box>
      {description && (
        <Typography sx={descriptionSx}>
          {intl.formatMessage({ id: description })}
        </Typography>
      )}
    </FormControl>
	);
};
