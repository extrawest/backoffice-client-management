import { HTMLAttributes, ReactNode } from "react";
import { ButtonProps as PrimeButtonProps } from "primereact/button";

export interface ButtonProps extends PrimeButtonProps {
	submitType?: boolean,
	extraClasses?: HTMLAttributes<"button">["className"],
	onClick?: () => void
}
