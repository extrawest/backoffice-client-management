import { HTMLAttributes, ReactNode } from "react";

export interface ButtonProps {
	children: ReactNode,
	submitType?: boolean,
	extraClasses?: HTMLAttributes<"button">["className"],
	onClick?: () => void
}
