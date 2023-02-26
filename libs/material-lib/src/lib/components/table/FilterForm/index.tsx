import { PriorityEnum } from "@mono-redux-starter/shared/types";
import {
	Divider,
	Box,
	SelectProps
} from "@mui/material";
import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { commonFormStyles } from "../../../forms/commonForm.styles";
import Button from "../../common/Button/Button";
import { FormSelect } from "../../common/FormSelect";
import { filterFormSx } from "./FilterForm.styles";
import { FilterFormProps } from "./FilterForm.types";

export const FilterForm: FC<FilterFormProps>= ({
	handleFilter,
	isFilterActive,
	handleClose,
	activePriority,
	setActivePriority
}) => {
	const intl = useIntl();
	const processedPriority = () => {
		const data = Object.values(PriorityEnum).map((
			priority, index
		) => ({
			id: index,
			name: priority,
			value: priority
		}));
		return data;
	};

	const handleChangeRole: SelectProps["onChange"] = (event) => {
		if(event.target?.value){
			setActivePriority(String(event.target.value));
		}
	};

	const handleSubmit = () => {
		handleFilter({ priority: activePriority, date: (new Date()).getTime() });
		isFilterActive(true);
		handleClose();
	};

	const handleClear = () => {
		setActivePriority("");
		handleFilter({ priority: "", date: (new Date()).getTime() });
		isFilterActive(false);
	};
	return (

    <form
      onSubmit={handleSubmit}
      noValidate
    >
      <Box sx={filterFormSx["fieldsWrapper"]}>
        <FormSelect
          data={processedPriority()}
          value={activePriority}
          label={intl.formatMessage({id: "priority"})}
          input={"priority"}
          onChange={handleChangeRole}
        />
      </Box>
      <Divider />
      <Box sx={filterFormSx["actionsWrapper"]}>
				<Button
					color="primary"
					fullWidth
					variant="contained"
					data-testid="submitBtn"
					sx={filterFormSx["clearButton"]}
					onClick={handleClear}
				>
					<FormattedMessage id="clear" />
				</Button>
				<Button
					color="primary"
					fullWidth
					variant="contained"
					data-testid="submitBtn"
					sx={commonFormStyles["submitButton"]}
					onClick={handleSubmit}
				>
					{intl.formatMessage({
						id: "template.submit",
						defaultMessage: "Submit"
					})}
				</Button>
      </Box>
    </form>
	);
};
