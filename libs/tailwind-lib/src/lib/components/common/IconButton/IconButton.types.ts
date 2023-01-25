import { HTMLAttributes, ReactNode } from "react";

export interface IconButtonProps {
	children: ReactNode,
	onClick: () => void,
	extraClasses?: HTMLAttributes<"button">["className"],
}
