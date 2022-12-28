import { FC } from "react";
import { NavLink } from "react-router-dom";
import { LinkProps } from "./Link.types";

export const Link: FC<LinkProps> = ({
	to,
	children
}) => {
	return (
		<NavLink
			to={to}
			className="decoration-none cursor-pointer hover:opacity-70 text-primary.contrastText"
		>
			{children}
		</NavLink>
	);
};
