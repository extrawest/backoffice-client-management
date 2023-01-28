import { FC } from "react";
import { PopoverProps } from "./Popover.types";

export const Popover: FC<PopoverProps> = ({ children, open, handleClose, smallSize }) => {
	return (
		<div className={`${open ? "flex" : "hidden"} absolute right-0 top-full ${smallSize ? "w-32" : "w-80" } bg-background border-1 border-solid border-grayscale-400 rounded-md z-20`}>
			<div
				className="fixed w-full h-full z-10 top-0 left-0"
				onClick={handleClose}
			/>
			<div className="z-20 relative w-full">
				{children}
			</div>
		</div>
	);
};
