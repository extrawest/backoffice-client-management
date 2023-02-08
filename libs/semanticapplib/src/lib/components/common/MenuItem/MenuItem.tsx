import { blue900 } from "@mono-redux-starter/shared/color";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { menuItemStyles } from "./MenuItem.styles";
import { MenuItemProps } from "./MenuItem.types";

export const MenuItem: FC<MenuItemProps> = ({
	href,
	title,
	icon,
	handleClick
}) => {
	const Icon = icon;
	return (
		<Menu.Item style={menuItemStyles.item}>
			<Icon
				size={24}
				fill={blue900}
				className="overflow-visible"
			/>
			<NavLink
				to={href}
				style={({isActive}) => ({
					...menuItemStyles.link,
					fontWeight: isActive ? 600 : 400
				})}
				onClick={handleClick}
			>
				{title}
			</NavLink>
		</Menu.Item>
	);
};
