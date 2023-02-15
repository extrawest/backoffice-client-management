import {
	collection,
	doc,
	setDoc,
	Timestamp
} from "@firebase/firestore";
import { firestore, storage } from "@mono-redux-starter/firebase";
import { CollectionEnum } from "@mono-redux-starter/shared/types";
import { Box } from "@mui/material";
import { FC, useState } from "react";
import ClientForm from "../../../forms/ClientForm/ClientForm";
import { Values } from "../../../forms/ClientForm/ClientForm.types";
import DropZone from "../../common/DropZone";
import { wrapperSx } from "./ClientCreateFormWrapper.styles";
import { ClientCreateFormWrapperProps } from "./ClientCreateFormWrapper.types";
import { useUploadFile } from "react-firebase-hooks/storage";
import { ref } from "firebase/storage";

type UploadFileHookType = ReturnType<typeof useUploadFile>[0];

const handleSubmit = (
	handleClose: () => void,
	file: File | null,
	uploadFile: UploadFileHookType
) => async (values: Values) => {
	const clientsRef = collection(
		firestore(),
		CollectionEnum.CLIENTS
	);
	try{
		let imageReference;

		if(file) {
			const storageRef = ref(
				storage,
				`${CollectionEnum.CLIENTS}/${values.firstName}_${values.lastName}.jpg`
			);
			await uploadFile(
				storageRef,
				file,
				{
					contentType: "image/jpeg"
				}
			);
			imageReference = storageRef;
		}

		const currentDate = (new Date()).getTime();

		const data = {
			firstName: values.firstName,
			lastName: values.lastName,
			email: values.email,
			age: Timestamp.fromMillis((new Date(values.date).getTime())),
			date: Timestamp.fromMillis(currentDate),
			id:"id" + currentDate,
			imageReference: imageReference ? `${imageReference.bucket}/${imageReference.fullPath}` : ""
		};

		await setDoc(
			doc(clientsRef),
			data
		);
	} catch (error) {
		console.log(error);
	} finally {
		handleClose();
	}
};

export const ClientCreateFormWrapper: FC<ClientCreateFormWrapperProps> = ({ handleClose }) => {
	const [image, setImage] = useState<File | null>(null);
	const [uploadFile] = useUploadFile();

	const handleFile = (file: File | null) => {
		file && setImage(file);
	};

	return (
		<Box sx={wrapperSx}>
			<DropZone
				handleFile={handleFile}
			/>
			<ClientForm
				onSubmit={
					handleSubmit(
						handleClose,
						image,
						uploadFile
					)}
				isLoading={false}
			/>
		</Box>
	);
};
