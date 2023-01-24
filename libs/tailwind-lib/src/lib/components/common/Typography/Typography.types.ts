import { ReactNode } from "react";
import { TagEnum, TypographyEnum } from "../../../types/typography";

export interface TypographyProps {
	children: ReactNode,
	type?: TypographyEnum,
	extraClasses?: string,
	tag?: TagEnum
}
