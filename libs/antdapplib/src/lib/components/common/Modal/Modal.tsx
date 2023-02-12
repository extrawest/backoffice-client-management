
import { FC } from "react";
import { TypographyEnum } from "../../../types/typography";
import { IconButton } from "../IconButton/IconButton";
import { Typography } from "../Typography/Typography";
import { ModalProps } from "./Modal.types";
import { Dialog } from "primereact/dialog";
import { OverlayPanel } from "primereact/overlaypanel";
import { Modal as AntdModal } from "antd";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const Modal: FC<ModalProps> = ({title, open, handleClose, children}) => {
	return (
		<AntdModal
			open={open}
			onCancel={handleClose}
			title={title}
			footer={false}
			centered
			width={"auto"}
			style={{
				maxWidth: pxToRem(700),
				width: "100%"
			}}
		>
			{children}
		</AntdModal>
	);
};
