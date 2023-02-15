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
import { tasksStyle } from "./Tasks.styles";

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
		<div style={tasksStyle.wrapper}>
			<div
				style={tasksStyle.titleWrapper}
			>
				<div style={tasksStyle.title}>
					<Typography
						type={TypographyEnum.BUTTON}
						textAlign="start"
					>
						<FormattedMessage id="tasks"/>
					</Typography>
					<Typography
						type={TypographyEnum.DESCRIPTION}
						textAlign="start"
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
					style={tasksStyle.headerWrapper}
				>
					<Typography
						type={TypographyEnum.SUBTITLE1}
						style={{
							fontWeight: 600
						}}
					>
						<FormattedMessage id="createNewTask" />
					</Typography>
					<IconButton
						onClick={handleOpen}
						icon="plus"
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
