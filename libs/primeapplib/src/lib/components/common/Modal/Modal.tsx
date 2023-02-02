
import { FC } from "react";
import { TypographyEnum } from "../../../types/typography";
import { IconButton } from "../IconButton/IconButton";
import { Typography } from "../Typography/Typography";
import { ModalProps } from "./Modal.types";
import { Dialog } from "primereact/dialog";
import { OverlayPanel } from "primereact/overlaypanel";

export const Modal: FC<ModalProps> = ({title, open, handleClose, children}) => {
	return (
		<Dialog
			visible={open}
			onHide={handleClose}
			header={title}
			className="bg-white w-full max-w-40rem border-round-lg overflow-hidden"
			headerClassName="bg-gray-200 border-b-1 border-gray-600 px-4 py-3 text-lg font-semibold"
			maskClassName="w-full h-full top-0 left-0 p-4 items-center justify-center bg-black-alpha-40"
		>
			<div className="max-w-3xl w-full bg-white z-2 relative rounded-md overflow-hidden">
				<div className="pt-3 pb-5">
					{children}
				</div>
			</div>
		</Dialog>
	);
};
