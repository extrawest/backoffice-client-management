import {
	useCallback,
	FC,
	useState,
	useEffect
} from "react";
import { useDropzone } from "react-dropzone";
import { Box } from "@mui/material";
import { styles } from "./DropZone.sx";
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
		<Box
			{...getRootProps()}
			sx={styles["root"]}
		>
			<input {...getInputProps()} />

			<Image
				src={url}
				size={150}
			/>
		</Box>
	);
};

export default DropZone;
