import { ReactNode, HTMLAttributes } from "react";
import { TagEnum, TypographyEnum } from "../../../types/typography";

export interface TypographyProps {
	children: ReactNode,
	type?: TypographyEnum,
	extraClasses?: HTMLAttributes<"p">["className"],
	tag?: TagEnum
}
