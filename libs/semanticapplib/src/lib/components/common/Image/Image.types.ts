import { DocumentReference } from "firebase/firestore";
// import { ref } from "firebase/storage";

export interface ImageProps {
	size: "small" | "large",
	src?: string,
	rounded?: boolean
}
