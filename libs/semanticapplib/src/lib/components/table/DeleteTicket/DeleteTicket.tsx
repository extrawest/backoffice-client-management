import { doc, firestore } from "@mono-redux-starter/firebase";
import { CollectionEnum } from "@mono-redux-starter/shared/types";
import { deleteDoc } from "firebase/firestore";
import { FC, useContext } from "react";
import { FormattedMessage } from "react-intl";
import { Popup } from "semantic-ui-react";
import { ClientsContext } from "../../../containers/ClientsContainer/ClientsContainer.context";
import { TypographyEnum } from "../../../types/typography";
import { Button } from "../../common/Button/Button";
import { Typography } from "../../common/Typography/Typography";
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
	const context = useContext(ClientsContext);

	const handleDelete = () => {
		handleDeleteTicket(
			uid,
			context?.handleRecallClients
		);
	};

	return (
			<Popup
				content={
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center"
						}}
					>
						<Button
							type="button"
							onClick={handleDelete}
						>
								<Typography type={TypographyEnum.BODY2}>
									<FormattedMessage id='delete' />
								</Typography>
						</Button>
					</div>
				}
				on='click'
				pinned
				trigger={
					<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
					>
						<Button
							icon="ellipsis vertical"
						/>
					</div>
				}
			/>
	);
};
