import { ReactNode } from "react";

export interface ButtonProps {
	children: ReactNode,
	submitType?: boolean,
	extraClasses?: string
}
