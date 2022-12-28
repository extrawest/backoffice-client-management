import { FC } from "react";
import { IconButtonProps } from "./IconButton.types";

export const IconButton: FC<IconButtonProps> = ({
	children,
	onClick
}) => {
	return (
		<button
			className="mr-16 xs:flex none"
			onClick={onClick}
		>
			{children}
		</button>
	);
};
