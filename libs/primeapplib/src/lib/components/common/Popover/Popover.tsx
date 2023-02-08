import { Button, ButtonProps } from "primereact/button";
import { OverlayPanel, OverlayPanelProps } from "primereact/overlaypanel";
import { FC, useRef } from "react";
import { PopoverProps } from "./Popover.types";

export const Popover: FC<PopoverProps> = ({ children, buttonLabel, icon }) => {
	const ref = useRef<any>(null);

	const handleClick: ButtonProps["onClick"] = (e) => {
		ref.current && ref.current.toggle(e);
	};

	return (
		<div className="card flex justify-content-center">
			<Button
				className="bg-white border-round-sm flex align-items-center justify-content-center text-gray-600 w-16 border-1 border-gray-400"
				type="button"
				icon={icon}
				label={buttonLabel}
				onClick={handleClick}
			/>
			<OverlayPanel ref={ref}>
				{children}
			</OverlayPanel>
		</div>
	);
};
