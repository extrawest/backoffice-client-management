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

export const TableAction: FC<TableActionProps> = ({ handleFilter, handleRecallClients }) => {
	const intl = useIntl();

	const [activePriority, setActivePriority] = useState<string>("");
	const [isFilterActive, setIsFilterActive] = useState<boolean>(false);
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [openFilter, setOpenFilter] = useState<boolean>(false);

	const filterStatus = (value: boolean) => {
		setIsFilterActive(value);
	};

	const handleOpenFilterForm = () => {
		setOpenFilter(!openFilter);
	};
	const handleCloseFilterForm = () => {
		setOpenFilter(false);
	};

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const handleSubmit = (values: FilterValue) => {
		handleCloseFilterForm();
		handleFilter(values);
	};

	return (
    <div className="flex justify-between items-center px-5 py-4">
			<Typography type={TypographyEnum.BUTTON}>
				<FormattedMessage id='allTickets' />
			</Typography>
      <div className="relative flex items-center gap-3">
				<Button
          extraClasses="bg-background rounded-sm bg-gradient-none flex items-center justify-center from-background to-background text-secondary-main w-16 border-solid border-1 border-grayscale-400 "
          onClick={handleOpenModal}
				>
          <AddIcon />
          <Typography type={TypographyEnum.BODY2}>
            <FormattedMessage id='add' />
          </Typography>
				</Button>
        <Button
          extraClasses="bg-background rounded-sm bg-gradient-none flex items-center justify-center from-background to-background text-secondary-main w-16 border-solid border-1 border-grayscale-400 "
          onClick={handleOpenFilterForm}
        >
          {!isFilterActive && <FitlerIcon /> }
          {isFilterActive && <FitlerIcon fill="#2F80ED" />}
          <Typography type={TypographyEnum.BODY2}>
            <FormattedMessage id='filter' />
          </Typography>
        </Button>
        <Popover
          open={openFilter}
					handleClose={handleCloseFilterForm}
        >
          <FilterForm
            handleFilter={handleSubmit}
            isFilterActive={filterStatus}
            handleClose={handleCloseFilterForm}
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
					handleRecallClients={handleRecallClients}
				/>
			</Modal>
    </div>
	);
};
