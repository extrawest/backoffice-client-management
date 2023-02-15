import { doc, firestore } from "@mono-redux-starter/firebase";
import { CollectionEnum } from "@mono-redux-starter/shared/types";
import { deleteDoc } from "firebase/firestore";
import { Button } from "primereact/button";
import {
	FC,
	useContext
} from "react";
import { useIntl } from "react-intl";
import { ClientsContext } from "../../../containers/ClientsContainer/ClientsContainer.context";
import { Popover } from "../../common/Popover/Popover";
import { DeleteTicketProps } from "./DeleteTicket.types";

const handleDeleteTicket = async (
	uid:string,
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
	}
};

export const DeleteTicket: FC<DeleteTicketProps> = ({ uid }) => {
	const intl = useIntl();

	const context = useContext(ClientsContext);

	const handleDelete = () => {
		handleDeleteTicket(
			uid,
			context?.handleRecallClients
		);
	};

	return (
		<div className="relative">
			<Popover
				icon={"pi pi-ellipsis-v"}
			>
				<div className="flex flex-column gap-3 p-4 bg-white">
					<Button
						className="bg-white border-round-sm flex align-items-center justify-content-center text-gray-600 w-16 border-1 border-gray-400"
						onClick={handleDelete}
						label={intl.formatMessage({id: "delete"})}
					/>
				</div>
			</Popover>
		</div>
	);
};
