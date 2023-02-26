import { ImageProps } from "antd";
import { DocumentReference } from "firebase/firestore";
// import { ref } from "firebase/storage";

export interface ImageWrapperProps extends ImageProps {
	reference: DocumentReference,
	rounded?: boolean
}
