import { Divider, Row } from "antd";
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
		<Row gutter={[8, 16]} align="middle" justify="start">
			<Icon
				size={24}
				className="overflow-visible"
			/>
			<Divider dashed type="vertical"/>
			<NavLink
				to={href}
				className={({isActive}) => ` ${isActive ? "font-bold" : "font-normal"} w-full inline-flex no-underline cursor-pointer outline-none hover:opacity-70 text-lg text-color`}
				onClick={handleClick}
			>
				{title}
			</NavLink>
		</Row>
	);
};
