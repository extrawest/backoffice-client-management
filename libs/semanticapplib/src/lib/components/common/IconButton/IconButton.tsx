import { FC } from "react";
import { Button } from "semantic-ui-react";
import { IconButtonProps } from "./IconButton.types";

export const IconButton: FC<IconButtonProps> = ({
	icon,
	onClick,
}) => {
	return (
		<Button
			onClick={onClick}
			icon={icon}
		/>
	);
};
