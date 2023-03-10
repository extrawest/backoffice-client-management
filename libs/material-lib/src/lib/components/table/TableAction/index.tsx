import { Add, FilterList } from "@mui/icons-material";
import {
	Box,
	IconButton,
	Popover,
	Typography
} from "@mui/material";
import {
	FC,
	useState
} from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Modal } from "../../common/Modal/Modal";
import { TicketCreateFormWrapper } from "../../tickets/TicketCreateFormWrapper/TicketCreateFormWrapper";
import { FilterForm } from "../FilterForm";
import {
	actionsWrapperSx,
	filterButtonSx,
	filterIconActiveSx,
	filterWrapperSx,
	formWrapperSx
} from "./TableAction.sx";
import { TableActionProps } from "./TableAction.types";

export const TableAction: FC<TableActionProps> = ({ handleFilter }) => {
	const intl = useIntl();

	const [activePriority, setActivePriority] = useState<string>("");
	const [isFilterActive, setIsFilterActive] = useState<boolean>(false);
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const [openModal, setOpenModal] = useState<boolean>(false);

	const open = Boolean(anchorEl);

	const filterStatus = (value: boolean) => {
		setIsFilterActive(value);
	};

	const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	return (
    <Box sx={actionsWrapperSx}>
			<Typography variant='button'>
				<FormattedMessage id='allTickets' />
			</Typography>
      <Box sx={filterWrapperSx}>
				<IconButton
					sx={filterButtonSx}
					onClick={handleOpenModal}
				>
          <Add />
          <Typography variant='body2'>
            <FormattedMessage id='add' />
          </Typography>
    </IconButton>
        <IconButton
          sx={filterButtonSx}
          onClick={handleOpen}
        >
          {!isFilterActive && <FilterList /> }
          {isFilterActive && <FilterList sx={filterIconActiveSx} />}
          <Typography variant='body2'>
            <FormattedMessage id='filter' />
          </Typography>
        </IconButton>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          sx={formWrapperSx}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <FilterForm
            handleFilter={handleFilter}
            isFilterActive={filterStatus}
            handleClose={handleClose}
            activePriority={activePriority}
            setActivePriority={(value: string) => setActivePriority(value)}
          />
        </Popover>
      </Box>
			<Modal
				handleClose={handleCloseModal}
        open={openModal}
        title={intl.formatMessage({ id: "addNewTicket" })}
        type="md"
        fullWidth
			>
				<TicketCreateFormWrapper
					handleClose={handleCloseModal}
				/>
			</Modal>
    </Box>
	);
};
