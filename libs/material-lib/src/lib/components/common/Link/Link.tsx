import { FC } from "react";
import { Link as MuiLink } from "@mui/material";
import { linkStyles } from "./Link.styles";
import { LinkProps } from "./Link.types";

export const Link: FC<LinkProps> = ({
	children,
	...rest
}) => {

	return (
		<MuiLink
			sx={{
				...linkStyles.tableBtn,
			}}
			{...rest}
		>
			{children}
		</MuiLink>
	);
};

export default Link;
