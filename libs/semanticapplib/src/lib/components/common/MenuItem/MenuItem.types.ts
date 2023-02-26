import { FC } from "react";
import { SVGIconProps } from "../../../icons";

export type MenuItemProps = {
	href: string,
	title: string,
	icon: FC<SVGIconProps>,
	handleClick?: () => void
};
