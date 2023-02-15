import { Clients } from "@mono-redux-starter/shared/types";
import { DocumentReference } from "firebase/firestore";

export interface ClientCellProps {
	clientReference: DocumentReference<Clients>
}
