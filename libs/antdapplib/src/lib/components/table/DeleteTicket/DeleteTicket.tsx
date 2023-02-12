import { DeleteOutlined } from "@ant-design/icons";
import { doc, firestore } from "@mono-redux-starter/firebase";
import { CollectionEnum } from "@mono-redux-starter/shared/types";
import { Button, Popconfirm } from "antd";
import { deleteDoc } from "firebase/firestore";
import {
	FC, useContext, useState
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
		<Popconfirm
			title={intl.formatMessage({id: "deleteTicket"})}
			onConfirm={handleDelete}
			showCancel={false}
		>
			<DeleteOutlined />
  </Popconfirm>
	);
};
