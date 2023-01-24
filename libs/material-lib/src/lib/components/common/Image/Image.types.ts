import { DocumentReference } from "firebase/firestore";
// import { ref } from "firebase/storage";

export interface ImageProps {
	size: number | string,
	src?: string,
	rounded?: boolean
}
