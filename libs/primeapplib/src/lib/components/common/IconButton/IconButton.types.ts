import { HTMLAttributes, ReactNode } from "react";
import { ButtonProps as PrimeButtonProps } from "primereact/button";

export interface IconButtonProps extends PrimeButtonProps {
	onClick: () => void,
	size?: string | number,
	extraClasses?: HTMLAttributes<"button">["className"],
}
