import { ReactNode } from "react";

export interface IconButtonProps {
	children: ReactNode,
	onClick: () => void,
	extraClasses?: string,
}
