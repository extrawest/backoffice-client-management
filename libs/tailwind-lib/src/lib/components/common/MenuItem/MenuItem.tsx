import { FC } from "react";
import { NavLink } from "react-router-dom";
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
					className={({isActive}) => ` ${isActive ? "font-bold underline" : "font-normal"} w-full inline-flex decoration-none cursor-pointer outline-none hover:opacity-70 text-lg`}
				>
					{title}
				</NavLink>
			</>
		</li>
	);
};
