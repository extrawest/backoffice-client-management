import { ReactNode } from "react";

export interface ModalProps {
	open: boolean,
	handleClose: () => void,
	children: ReactNode,
	title?: string,
}
