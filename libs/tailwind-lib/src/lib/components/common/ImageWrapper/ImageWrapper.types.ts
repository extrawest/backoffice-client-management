import { DocumentReference } from "firebase/firestore";
// import { ref } from "firebase/storage";

export interface ImageWrapperProps {
	size: "big" | "small",
	reference: DocumentReference,
	rounded?: boolean
}
