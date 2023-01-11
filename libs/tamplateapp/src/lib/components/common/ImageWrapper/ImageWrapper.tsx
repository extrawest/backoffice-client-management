import {
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useState
} from "react";
import { ImageWrapperProps } from "./ImageWrapper.types";
import { ref, getDownloadURL } from "firebase/storage";
import { storage, useParseRef } from "@mono-redux-starter/firebase";
import { Image } from "../Image/Image";

const getFile = (
	setImageSrc: Dispatch<SetStateAction<string | null>>,
	name: string
) => async () => {
	const url = await getDownloadURL(ref(
		storage,
		`clients/${name}`
	));
	setImageSrc(url);
};

export const ImageWrapper: FC<ImageWrapperProps> = ({
	reference,
	size,
	rounded
}) => {

	const [imageSrc, setImageSrc] = useState<string | null>(null);
	const clientRef = useParseRef(reference);

	useEffect(
		() => {
			if(!clientRef){
				return;
			}
			getFile(
				setImageSrc,
				clientRef["image"]["id"]
			)();
		},
		[reference, clientRef]
	);

	return (
		<>
			<Image
				src={imageSrc ?? undefined}
				size={size}
				rounded={rounded}
			/>
		</>
	);
};
