import { mergeStrings } from "@mono-redux-starter/shared/utils";
import { FC } from "react";
import { IconButtonProps } from "./IconButton.types";

export const IconButton: FC<IconButtonProps> = ({
	children,
	onClick,
	extraClasses
}) => {
	return (
		<button
			className={mergeStrings(
				"xs:flex none",
				extraClasses
			)}
			onClick={onClick}
			type="button"
		>
			{children}
		</button>
	);
};
