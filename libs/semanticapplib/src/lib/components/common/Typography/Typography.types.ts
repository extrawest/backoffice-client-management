import { ReactNode, CSSProperties } from "react";
import { TagEnum, TypographyEnum } from "../../../types/typography";

export interface TypographyProps {
	children: ReactNode,
	type?: TypographyEnum,
	extraClasses?: string,
	tag?: TagEnum,
	style?: CSSProperties,
	textAlign?: "center" | "start" | "end"
}
