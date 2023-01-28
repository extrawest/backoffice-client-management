import { getDoc } from "@firebase/firestore";
import { Clients } from "@mono-redux-starter/shared/types";
import { convertToDate } from "@mono-redux-starter/shared/utils";
import { DocumentReference } from "firebase/firestore";
import {
	Dispatch, FC, SetStateAction, useEffect, useState
} from "react";
import { CellWithCaption } from "../CellWithCaption/CellWithCaption";
import { ClientCellProps } from "./ClientCell.types";

export const getClient = (
	clientReference: DocumentReference<Clients>, setClientData: Dispatch<SetStateAction<Clients | undefined>>
) => async () => {
	if(!clientReference){
		return;
	}
	const client = await getDoc(clientReference);
	setClientData(client.data());
};

export const ClientCell: FC<ClientCellProps> = ({ clientReference }) => {
	const [clientData, setClientData] = useState<Clients>();
	useEffect(
		() => {
			getClient(
				clientReference,
				setClientData
			)();
		},
		[]
	);
	return clientData ? (
		<CellWithCaption
			mainText={clientData ? `${clientData.firstName} ${clientData.lastName}` : ""}
			captionFormatMessage="on"
			caption={clientData ? convertToDate(clientData.date.seconds) : ""}
		/>
	): (<></>);
};
