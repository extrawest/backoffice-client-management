import { DocumentReference } from "firebase/firestore";
// import { ref } from "firebase/storage";

export interface ImageProps {
	size: number | string,
	src?: "small" | "big",
	rounded?: boolean
}
