import { Clients } from "@mono-redux-starter/shared/types";
import { DocumentData, DocumentReference } from "firebase/firestore";

export interface ClientCellProps {
	clientReference: DocumentReference<Clients>
}
