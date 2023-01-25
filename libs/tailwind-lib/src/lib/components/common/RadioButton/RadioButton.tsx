import { FC } from "react";
import { RadioButtonProps } from "./RadioButton.types";

export const RadioButton: FC<RadioButtonProps> = ({children, ...rest}) => {
	return (
		<div className="relative flex items-center w-full">
			<div className="w-10">
				<input
					{...rest}
					type="radio"
					className="peer/radio opacity-0 w-full h-full absolute left-0 top-0"
				/>
				<span className="block peer-checked/radio:bg-blue-600 w-5 h-5 border-1 border-solid border-grayscale-400 rounded-circle"/>
			</div>
			<label htmlFor={rest.id} className="w-full">
				{children}
			</label>
		</div>
	);
};
