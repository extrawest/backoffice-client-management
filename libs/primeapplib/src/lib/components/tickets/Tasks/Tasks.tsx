import { FC, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Typography } from "../../common/Typography/Typography";
import { TypographyEnum } from "../../../types/typography";
import { Link } from "../../common/Link/Link";
import { AppRouteEnum } from "../../../types";
import { IconButton } from "../../common/IconButton/IconButton";
import { TaskList } from "../TaskList/TaskList";
import { TicketCreateFormWrapper } from "../TicketCreateFormWrapper/TicketCreateFormWrapper";
import { Modal } from "../../common/Modal/Modal";

export const Tasks: FC = () => {
	const intl = useIntl();
	const [open, setOpen] = useState<boolean>(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<div className="flex flex-column justify-content-between h-full">
			<div
				className="flex justify-content-between align-items-center mb-0 pt-6 px-4 pb-3"
			>
				<div className="flex flex-column gap-1 w-2">
					<Typography
						type={TypographyEnum.BUTTON}
						extraClasses="text-start"
					>
						<FormattedMessage id="tasks"/>
					</Typography>
					<Typography
						type={TypographyEnum.DESCRIPTION}
						extraClasses="text-start"
					>
						<FormattedMessage
							id="today"
						/>
					</Typography>
				</div>
				<Link
					to={AppRouteEnum.CLIENTS}
				>
					<FormattedMessage id="viewAll" />
				</Link>
			</div>
			<div>
				<div
					className="flex justify-content-between align-items-center mb-0 py-2 px-6 gap-2 border-bottom-1 border-gray-200 last-of-type:border-none"
				>
					<Typography
						extraClasses="text-gray-400"
					>
						<FormattedMessage id="createNewTask" />
					</Typography>
					<IconButton
						onClick={handleOpen}
						size="2"
						icon="pi pi-plus"
					/>
				</div>
				<TaskList />
			</div>
			<Modal
				handleClose={handleClose}
        open={open}
        title={intl.formatMessage({ id: "addNewTicket" })}
			>
				<TicketCreateFormWrapper handleClose={handleClose} />
			</Modal>
		</div>
	);
};
