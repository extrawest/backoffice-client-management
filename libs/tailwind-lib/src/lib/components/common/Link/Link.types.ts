import { ReactNode } from "react";
import { AppRouteEnum } from "../../../types";

export interface LinkProps {
	children: ReactNode,
	to: string | AppRouteEnum,
}
