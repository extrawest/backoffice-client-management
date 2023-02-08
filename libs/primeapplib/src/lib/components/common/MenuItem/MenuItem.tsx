import { FC } from "react";
import { NavLink } from "react-router-dom";
import { MenuItemProps } from "./MenuItem.types";

export const MenuItem: FC<MenuItemProps> = ({
	href,
	title,
	icon,
	handleClick
}) => {
	const Icon = icon;
	return (
		<li className="flex align-items-center gap-2 py-2">
			<Icon
				size={24}
				className="overflow-visible"
			/>
			<NavLink
				to={href}
				className={({isActive}) => ` ${isActive ? "font-bold" : "font-normal"} w-full inline-flex no-underline cursor-pointer outline-none hover:opacity-70 text-lg text-color`}
				onClick={handleClick}
			>
				{title}
			</NavLink>
		</li>
	);
};
