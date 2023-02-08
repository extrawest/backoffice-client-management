import { ReactNode } from "react";

export interface PopoverProps {
	children: ReactNode,
	open: boolean,
	handleClose: () => void,
	smallSize?: boolean
};
