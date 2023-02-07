import { doc, firestore } from "@mono-redux-starter/firebase";
import { CollectionEnum } from "@mono-redux-starter/shared/types";
import { deleteDoc } from "firebase/firestore";
import {
	FC, useContext, useState
} from "react";
import { FormattedMessage } from "react-intl";
import { ClientsContext } from "../../../containers/ClientsContainer/ClientsContainer.context";
import { MenuIcon } from "../../../icons";
import { TypographyEnum } from "../../../types/typography";
import { Button } from "../../common/Button/Button";
import { IconButton } from "../../common/IconButton/IconButton";
import { Popover } from "../../common/Popover/Popover";
import { Typography } from "../../common/Typography/Typography";
import { DeleteTicketProps } from "./DeleteTicket.types";

const handleDeleteTicket = async (
	uid:string,
	handleClose: () => void,
	handleRecallClients?: () => void,
) => {
	try{
		await deleteDoc(doc(
			firestore(),
			CollectionEnum.TICKETS,
			uid
		));
		handleRecallClients && handleRecallClients();
	} catch(error){
		console.log(error);
	} finally {
		handleClose();
	}
};

export const DeleteTicket: FC<DeleteTicketProps> = ({ uid }) => {
	const [open, setOpen] = useState<boolean>(false);
	const context = useContext(ClientsContext);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleDelete = () => {
		handleDeleteTicket(
			uid,
			handleClose,
			context?.handleRecallClients
		);
	};

	return (
		<div className="relative">
			<IconButton
				onClick={handleOpen}
				icon="ellipsis vertical"
			/>
			<Popover
				open={open}
				smallSize
				handleClose={handleClose}
			>
				<div className="flex flex-col gap-3 p-4">
					<Button
							extraClasses=" bg-background rounded-sm bg-gradient-none flex items-center justify-center from-background to-background text-secondary-main border-solid border-1 border-grayscale-400 w-100%"
							onClick={handleDelete}
					>
							<Typography type={TypographyEnum.BODY2}>
								<FormattedMessage id='delete' />
							</Typography>
					</Button>
				</div>
			</Popover>
		</div>
	);
};
