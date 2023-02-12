
import { FC } from "react";
import { TypographyEnum } from "../../../types/typography";
import { IconButton } from "../IconButton/IconButton";
import { Typography } from "../Typography/Typography";
import { ModalProps } from "./Modal.types";
import { Dialog } from "primereact/dialog";
import { OverlayPanel } from "primereact/overlaypanel";
import { Modal as AntdModal } from "antd";

export const Modal: FC<ModalProps> = ({title, open, handleClose, children}) => {
	return (
		<AntdModal
			open={open}
			onCancel={handleClose}
			title={title}
			footer={false}
			centered
		>
			{children}
		</AntdModal>
	);
};
