import { DocumentReference } from "firebase/firestore";
// import { ref } from "firebase/storage";

export interface ImageWrapperProps {
	size: "large" | "small",
	reference: DocumentReference,
	rounded?: boolean
}
