import { doc, firestore } from "@mono-redux-starter/firebase";
import { Clients, Tickets } from "@mono-redux-starter/shared/types";
import { useDocumentData, useDocumentDataOnce } from "react-firebase-hooks/firestore";

export const useGetTicketDocumentData = (uid: string) => {
	const [value, loading, error] = useDocumentData(doc(
		firestore(),
		"tickets",
		uid
	));
	return [value, loading, error] as [Tickets, boolean, unknown];
};

export const useGetClientDocumentData = (uid: string) => {
	const [value, loading, error] = useDocumentData(doc(
		firestore(),
		"clients",
		uid
	));
	return [value, loading, error] as [Clients, boolean, unknown];
};

export const useGetTicketDocumentDataOnce = (uid: string) => {
	const [value, loading, error] = useDocumentDataOnce(doc(
		firestore(),
		"tickets",
		uid
	));
	return [value, loading, error] as [Tickets, boolean, unknown];
};

export const useGetClientDocumentDataOnce = (uid: string) => {
	const [value, loading, error] = useDocumentDataOnce(doc(
		firestore(),
		"clients",
		uid
	));
	return [value, loading, error] as [Clients, boolean, unknown];
};
