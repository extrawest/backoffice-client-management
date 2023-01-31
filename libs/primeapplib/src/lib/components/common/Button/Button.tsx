import { mergeStrings } from "@mono-redux-starter/shared/utils";
import { FC } from "react";
import { ButtonProps } from "./Button.types";
import { Button as PrimeButton } from "primereact/button";

export const Button: FC<ButtonProps> = ({
	children,
	submitType = false,
	extraClasses,
	onClick
}) => {
	return (
		<PrimeButton
			className={mergeStrings(
				`w-9rem border-round-half bg-default-gradient text-common-white py-2 outline-none border-none text-white font-medium text-lg flex aling-items-center justify-content-center`,
				extraClasses
			)}
			type={submitType ? "submit" : "button"}
			onClick={onClick}
		>
			{children}
		</PrimeButton>
	);
};
