import { FC } from "react";
import { NavLink } from "react-router-dom";
import { linkStyle } from "./Link.styles";
import { LinkProps } from "./Link.types";

export const Link: FC<LinkProps> = ({
	to,
	children
}) => {
	return (
		<NavLink
			to={to}
			style={linkStyle}
		>
			{children}
		</NavLink>
	);
};
