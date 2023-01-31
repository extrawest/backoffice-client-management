import { mergeStrings } from "@mono-redux-starter/shared/utils";
import { FC } from "react";
import { IconButtonProps } from "./IconButton.types";
import { Button as PrimeButton } from "primereact/button";

export const IconButton: FC<IconButtonProps> = ({
	onClick,
	extraClasses,
	...rest
}) => {
	return (
		<PrimeButton
			className={mergeStrings(
				"border-circle bg-black-alpha-20 w-3rem h-3rem border-none m-2 hover:bg-black-alpha-30",
				extraClasses
			)}
			onClick={onClick}
			{...rest}
		/>
	);
};
