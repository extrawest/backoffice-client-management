
import { FC } from "react";
import { ModalProps } from "./Modal.types";
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
