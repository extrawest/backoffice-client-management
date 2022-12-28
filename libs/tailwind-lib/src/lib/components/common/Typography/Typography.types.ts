import { ReactNode } from "react";
import { TypographyEnum } from "../../../types/typography";

export interface TypographyProps {
	children: ReactNode,
	type?: TypographyEnum,
	extraClasses?: string
}
