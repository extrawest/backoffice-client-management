import { doc, firestore } from "@mono-redux-starter/firebase";
import { CollectionEnum } from "@mono-redux-starter/shared/types";
import { MoreVert } from "@mui/icons-material";
import {
	Box,
	IconButton,
	Popover,
	Typography
} from "@mui/material";
import { deleteDoc } from "firebase/firestore";
import {
	FC, useContext, useState
} from "react";
import { FormattedMessage } from "react-intl";
import { ClientsContext } from "../../../containers/ClientsContainer/ClientsContainer.context";
import Button from "../../common/Button/Button";
import { formWrapperSx } from "../TableAction/TableAction.sx";
import { deleteTicketStyle } from "./DeleteTicket.styles";
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
	const context = useContext(ClientsContext);

	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const open = Boolean(anchorEl);

	const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleDelete = () => {
		handleDeleteTicket(
			uid,
			handleClose,
			context?.handleRecallClients
		);
	};

	return (
		<Box>
			<IconButton
				onClick={handleOpen}
			>
				<MoreVert />
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
				<Box sx={deleteTicketStyle["buttonWrapper"]}>
				<Button
					onClick={handleDelete}
				>
					<Typography variant="body2">
						<FormattedMessage id="delete"/>
					</Typography>
				</Button>
				</Box>
			</Popover>
		</Box>
	);
};
