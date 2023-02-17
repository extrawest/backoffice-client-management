import {
	FC,
	useState
} from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Popup } from "semantic-ui-react";
import { TypographyEnum } from "../../../types/typography";
import { Button } from "../../common/Button/Button";
import { Modal } from "../../common/Modal/Modal";
import { Typography } from "../../common/Typography/Typography";
import { TicketCreateFormWrapper } from "../../tickets/TicketCreateFormWrapper/TicketCreateFormWrapper";
import { FilterForm } from "../FilterForm";
import { tableActionsStyles } from "./TableAction.styles";
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
    <div style={tableActionsStyles.wrapper}>
			<Typography type={TypographyEnum.BUTTON}>
				<FormattedMessage id='allTickets' />
			</Typography>
      <div style={tableActionsStyles.header}>
				<Button
					onClick={handleOpenModal}
					content={intl.formatMessage({id: "add"})}
					icon="plus"
					type="button"
					outlined
				/>
				<Popup
					content={
						<FilterForm
							handleFilter={handleSubmit}
							isFilterActive={filterStatus}
							handleClose={handleCloseFilterForm}
							activePriority={activePriority}
							setActivePriority={(value: string) => setActivePriority(value)}
						/>
					}
					position="bottom right"
					on='click'
					pinned
					trigger={
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							<Button
								onClick={handleOpenFilterForm}
								content={intl.formatMessage({id: "filter"})}
								icon="filter"
								type="button"
								outlined
							/>
						</div>
					}
				/>
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
