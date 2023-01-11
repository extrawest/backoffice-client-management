import { DocumentReference } from "firebase/firestore";
import { PriorityEnum } from "../enums/PriorityEnum";

export type DataProps<T> = {
	[key: string]: T
};

export interface firestoreTimestamp {
	seconds: number,
	nanoseconds: number
}

export interface Tickets {
	date: firestoreTimestamp,
	last_updated: firestoreTimestamp,
	name: string,
	priority: PriorityEnum | string,
	uid: string,
	id: number,
	reference: DocumentReference<Clients>
}

export interface Clients {
	date: firestoreTimestamp,
	firstName: string,
	id: number,
	lastName: string,
	tickets: string[],
	imageReference: DocumentReference
}
