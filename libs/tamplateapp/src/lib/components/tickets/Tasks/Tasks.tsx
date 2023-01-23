import { Add } from "@mui/icons-material";
import {
	Box,
	IconButton,
	Typography
} from "@mui/material";
import { FC, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { commonContainers } from "../../../containers/commonContainers.styles";
import { AppRouteEnum } from "../../../types";
import Link from "../../common/Link/Link";
import { Modal } from "../../common/Modal/Modal";
import { TaskList } from "../../common/TaskList/TaskList";
import { tasksStyles } from "./Tasks.styles";
import { TicketCreateFormWrapper } from "../TicketCreateFormWrapper/TicketCreateFormWrapper";

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
		<Box sx={tasksStyles["wrapper"]}>
			<Box
				sx={tasksStyles["tasksWrapper"]}
			>
				<Box sx={tasksStyles["titleWrapper"]}>
					<Typography
						variant="button"
					>
						<FormattedMessage id="tasks"/>
					</Typography>
					<Typography variant="description">
						<FormattedMessage
							id="today"
						/>
					</Typography>
				</Box>
				<Link
					href={AppRouteEnum.CLIENTS}
				>
					<FormattedMessage id="viewAll" />
				</Link>
			</Box>
			<Box>
				<Box
					sx={tasksStyles["taskListTitleWrapperStyles"]}
				>
					<Typography
						variant="body1"
						sx={tasksStyles["taskListTitleStyles"]}
					>
						<FormattedMessage id="createNewTask" />
					</Typography>
					<IconButton
						onClick={handleOpen}
						sx={tasksStyles["addButtonStyle"]}
					>
						<Add />
					</IconButton>
				</Box>
				<TaskList />
			</Box>
			<Modal
				handleClose={handleClose}
        open={open}
        title={intl.formatMessage({ id: "addNewClient" })}
        type="md"
        fullWidth
			>
				<TicketCreateFormWrapper
					handleClose={handleClose}
				/>
			</Modal>
		</Box>
	);
};
