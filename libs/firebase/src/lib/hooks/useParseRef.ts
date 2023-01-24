import {
	DocumentData,
	getDoc,
	DocumentReference
} from "@firebase/firestore";
import { useEffect, useState } from "react";

export const useParseRef = (ref: DocumentReference<DocumentData>) => {
	const [data, setData] = useState<DocumentData | null>(null);

	const getData = async () => {
		try {
			const doc = await getDoc(ref);
			const docData = doc.data();
			docData && setData(docData);
		} catch(error){
			console.log(error);
		}
	};

	useEffect(
		() => {
			if(!ref){
				return;
			}
			getData();
		},
		[ref]
	);

	return data ?? null;

};
