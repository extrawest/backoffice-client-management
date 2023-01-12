import {
	collection, DocumentData, QuerySnapshot
} from "@firebase/firestore";
import { firestore } from "@mono-redux-starter/firebase";
import { Clients, Tickets } from "@mono-redux-starter/shared/types";
import { useCollectionData, useCollection } from "react-firebase-hooks/firestore";

export const useGetCollectionTicketsData = () => {
	const [value, loading, error] = useCollectionData(collection(
		firestore(),
		"tickets"
	));
	return [value, loading, error] as [Tickets[], boolean, unknown];
};

export const useGetCollectionClientsData = () => {
	const [value, loading, error] = useCollectionData(collection(
		firestore(),
		"clients"
	));
	return [value, loading, error] as [Clients[], boolean, unknown];
};

export const useGetCollectionClients = () => {
	const [value, loading, error] = useCollection(collection(
		firestore(),
		"clients"
	));
	return [value, loading, error] as [QuerySnapshot<DocumentData>, boolean, unknown];
};
