import { FC, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Typography } from "../../common/Typography/Typography";
import { TypographyEnum } from "../../../types/typography";
import { Link } from "../../common/Link/Link";
import { AppRouteEnum } from "../../../types";
import { IconButton } from "../../common/IconButton/IconButton";
import { AddIcon } from "../../../icons";
import { TaskList } from "../TaskList/TaskList";

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
		<div className="flex flex-col justify-between h-full">
			<div
				className="flex justify-between items-center mb-0 pt-8 px-8 pb-4"
			>
				<div className="flex flex-col gap-1 w-4/5">
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
				className="flex justify-between items-center mb-0 py-4 px-8 gap-2.5 border-b-1 border-solid border-grayscale-200 last-of-type:border-none"
				>
					<Typography
						extraClasses="text-grayscale-400"
					>
						<FormattedMessage id="createNewTask" />
					</Typography>
					<IconButton
						onClick={handleOpen}
						extraClasses="rounded-xl"
					>
						<AddIcon />
					</IconButton>
				</div>
				<TaskList />
			</div>
			{/* <Modal
				handleClose={handleClose}
        open={open}
        title={intl.formatMessage({ id: "addNewClient" })}
        type="md"
        fullWidth
			>
				<TicketCreateFormWrapper
					handleClose={handleClose}
				/>
			</Modal> */}
		</div>
	);
};
