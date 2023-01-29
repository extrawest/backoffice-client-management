import { DocumentReference } from "firebase/firestore";
// import { ref } from "firebase/storage";

export interface ImageProps {
	size: "small" | "big",
	src?: string,
	rounded?: boolean
}
