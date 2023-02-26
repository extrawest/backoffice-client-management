import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

export const convertData = (data: QueryDocumentSnapshot<unknown>[] | undefined) => {
	if(!data){
		return [];
	}
	return data.map((item: DocumentData) => {
		return {
			...item["data"](),
			uid: item["id"]
		};
	});
};
