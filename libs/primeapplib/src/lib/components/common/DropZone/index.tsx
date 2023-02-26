import {
	useCallback,
	FC,
	useState,
	useEffect
} from "react";
import { useDropzone } from "react-dropzone";
import { Image } from "../Image/Image";

interface DropZoneProps {
	handleFile: (file: File | null) => void;
}

const DropZone: FC<DropZoneProps> = ({ handleFile }) => {
	const [file, setFile] = useState<File | null>(null);
	const [url, setUrl] = useState<string | undefined>(undefined);

	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			const q = acceptedFiles[0];
			setUrl(URL.createObjectURL(q));
			setFile(acceptedFiles[0]);
		},
		[file]
	);

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		multiple: false,
		accept:{
			"image/x-citrix-jpeg": [".jpeg", ".jpg"],
			"image/x-png": [".png"]
		}
	});

	useEffect(
		() => {
			file && handleFile(file);
		},
		[file]
	);

	return (
		<div
			{...getRootProps()}
			className="flex min-h-22rem flex-column align-items-center justify-content-center p-4rem border-round-sm text-grey-600 outline-none mb-2 max-w-30rem"
		>
			<input {...getInputProps()} />

			<Image
				src={url}
				size="large"
			/>
		</div>
	);
};

export default DropZone;
