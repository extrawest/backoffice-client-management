import { FC } from "react";
import { render } from "react-dom";
import { NavLink } from "react-router-dom";
import { TypographyEnum } from "../../../types/typography";
import { Typography } from "../Typography/Typography";
import { MenuItemProps } from "./MenuItem.types";

export const MenuItem: FC<MenuItemProps> = ({ href, title, icon}) => {
	const Icon = icon;
	return (
		<li className="flex items-center gap-3.5 py-2">
			<>
				<Icon
					size={24}
					className="overflow-visible"
				/>
				<NavLink
					to={href}
					className={({isActive}) => ` ${isActive ? "font-medium" : "font-normal"} width-100% inline-flex decoration-none cursor-pointer outline-none hover:opacity-70 text-lg`}
				>
					{title}
				</NavLink>
			</>
		</li>
	);
};
