import { DocumentReference } from "firebase/firestore";
// import { ref } from "firebase/storage";

export interface ImageWrapperProps {
	size: number | string,
	reference: DocumentReference,
	rounded?: boolean
}
