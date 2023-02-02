import {
	FC,
	useState
} from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { AddIcon, FitlerIcon } from "../../../icons";
import { TypographyEnum } from "../../../types/typography";
import { Button } from "../../common/Button/Button";
import { Modal } from "../../common/Modal/Modal";
import { Popover } from "../../common/Popover/Popover";
import { Typography } from "../../common/Typography/Typography";
import { TicketCreateFormWrapper } from "../../tickets/TicketCreateFormWrapper/TicketCreateFormWrapper";
import { FilterForm } from "../FilterForm";
import { FilterValue, TableActionProps } from "./TableAction.types";

export const TableAction: FC<TableActionProps> = ({ handleFilter }) => {
	const intl = useIntl();

	const [activePriority, setActivePriority] = useState<string>("");
	const [isFilterActive, setIsFilterActive] = useState<boolean>(false);
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [openFilter, setOpenFilter] = useState<boolean>(false);

	const filterStatus = (value: boolean) => {
		setIsFilterActive(value);
	};

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const handleClear = () => {
		handleFilter({priority: ""});
	};

	const handleSubmit = (values: FilterValue) => {
		handleFilter(values);
	};

	return (
    <div className="flex justify-content-between align-items-center px-5 py-4">
			<Typography type={TypographyEnum.BUTTON}>
				<FormattedMessage id='allTickets' />
			</Typography>
      <div className="relative flex align-items-center gap-3">
				<Button
					className="bg-white border-round-sm flex align-items-center justify-content-center text-gray-600 w-16 border-1 border-gray-400"
					type="button"
					icon="pi pi-plus"
					label={intl.formatMessage({id: "add"})}
					onClick={handleOpenModal}
				/>
        <Popover
					buttonLabel={intl.formatMessage({id: "filter"})}
					icon={isFilterActive ? "pi pi-filter" : "pi pi-filter p-button-primary"}
        >
          <FilterForm
            handleFilter={handleSubmit}
            isFilterActive={filterStatus}
            handleClose={handleClear}
            activePriority={activePriority}
            setActivePriority={(value: string) => setActivePriority(value)}
          />
        </Popover>
      </div>
			<Modal
				handleClose={handleCloseModal}
        open={openModal}
        title={intl.formatMessage({ id: "addNewTicket" })}
			>
				<TicketCreateFormWrapper
					handleClose={handleCloseModal}
				/>
			</Modal>
    </div>
	);
};
