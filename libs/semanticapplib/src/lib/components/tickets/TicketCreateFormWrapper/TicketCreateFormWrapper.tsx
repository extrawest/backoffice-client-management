import {
	collection,
	doc,
	getDoc,
	addDoc,
	updateDoc,
	Timestamp
} from "@firebase/firestore";
import { firestore } from "@mono-redux-starter/firebase";
import { useGetCollectionClients } from "@mono-redux-starter/shared/hooks";
import { CollectionEnum } from "@mono-redux-starter/shared/types";
import {
	FC, useMemo, useState
} from "react";
import TicketForm from "../../../forms/TicketForm/TicketForm";
import { TicketValues } from "../../../forms/TicketForm/TicketForm.types";
import { useTypedSelector } from "../../../store";
import { TicketCreateFormWrapperProps } from "./TicketCreateFormWrapper.types";

const handleSubmit = (
	handleClose: () => void, uid?: string
) => async (values: TicketValues) => {
	const ticketsRef = collection(
		firestore(),
		CollectionEnum.TICKETS
	);
	try{
		const currentDate = (new Date()).getTime();
		const clientRef = doc(
			firestore(),
			CollectionEnum.CLIENTS,
			values.client
		);

		const data = {
			date: Timestamp.fromMillis(currentDate),
			last_updated: Timestamp.fromMillis(currentDate),
			name: values.name,
			priority: values.priority,
			id:"id" + currentDate,
			reference: clientRef,
			manager_uid: uid
		};

		const currentTicketDoc = await addDoc(
			ticketsRef,
			data
		);

		const clientDoc = await getDoc(clientRef);
		const clientDocData = clientDoc.data();
		if(clientDocData){
			await updateDoc(
				clientRef,
				{
					tickets: !clientDocData["tickets"]?.length
						? [currentTicketDoc.id]
						:	clientDocData["tickets"].includes(currentTicketDoc.id)
							? clientDocData["tickets"]
							: [...clientDocData["tickets"], currentTicketDoc.id]
				}
			);
		}

	} catch (error) {
		console.log(error);
	} finally {
		handleClose();
	}
};

export const TicketCreateFormWrapper: FC<TicketCreateFormWrapperProps> = ({ handleClose }) => {

	const [value] = useGetCollectionClients();
	const [activeClient, setActiveClient] = useState<string>("");

	const { managerInfo } = useTypedSelector(state => state.authSlice);

	const processedClients = useMemo(
		() => {
			if(!value){
				return [];
			}
			const clients = value.docs.map((
				item, index
			) => ({
				id: index,
				text: `${item.data()["firstName"]} ${item.data()["lastName"]}`,
				value: item.id
			}));
			return clients;
		},
		[value]
	);

	return (
		<div className="flex items-start justify-center gap-2.5">
			<TicketForm
				onSubmit={handleSubmit(
					handleClose,
					managerInfo?.manager_uid
				)}
				isLoading={false}
				processedClients={processedClients}
			/>
		</div>
	);
};