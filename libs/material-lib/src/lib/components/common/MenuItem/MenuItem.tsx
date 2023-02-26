import { FC } from "react";
import {
	Link,
	MenuItem as MuiMenuItem,
	SvgIcon
} from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";
import { menuItemStyles } from "./MenuItem.styles";
import { MenuItemProps } from "./MenuItem.types";

export const MenuItem: FC<MenuItemProps> = ({ href, title, icon}) => {
	const Icon = icon;

	return (
		<MuiMenuItem
			sx={menuItemStyles.itemWrap}
			key={`menu${title}`}
		>
			<SvgIcon
				sx={menuItemStyles.svgIcon}
				component={() => (
					<Icon sx={{overflow: "visible"}}/>
				)}
			/>
			<Link
				component={RouterLink}
				to={href}
				sx={{...menuItemStyles.menuLink}}
			>
					{title}
			</Link>
		</MuiMenuItem>
	);
};

export default MenuItem;
