import { DocumentReference } from "firebase/firestore";
import { CSSProperties } from "react";
import { TicketSortFields } from "../enums";
import { PriorityEnum, TaskStatusEnum } from "../enums/PriorityEnum";

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

export interface TicketsFilterDataType {
	priority: PriorityEnum | string,
	sortAsc: boolean,
	sortField: TicketSortFields | string
}

export interface Clients {
	date: firestoreTimestamp,
	firstName: string,
	id: number,
	lastName: string,
	tickets: string[],
	imageReference: DocumentReference
}

export interface SelectValue {
	value: string,
	id: number,
	name: string
}

export interface SimpleDataList {
	value: string,
	title: string
}

export interface TaskDataList {
	id: number,
	text: string,
	taskStatus: TaskStatusEnum
}

export interface CSSStyles {
	[key: string]: CSSProperties
}
