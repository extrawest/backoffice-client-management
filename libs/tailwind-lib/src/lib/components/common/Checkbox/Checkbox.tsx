import { ChangeEventHandler, FC, useState } from "react";
import { TypographyEnum } from "../../../types/typography";
import { Typography } from "../Typography/Typography";
import { CheckboxProps } from "./Checkbox.types";

export const Checkbox: FC<CheckboxProps> = ({
	name,
	id,
	onChange,
	label
}) => {

	const [checked, setChecked] = useState<boolean>(false);

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setChecked(e.target.checked);
		onChange(e.target.checked);
	};

	return (
		<label
			className="relative flex justify-between gap-2 items-center group"
			htmlFor={id}
		>
			<input
				className="opacity-0 absolute top-0 left-0 z-0"
				type="checkbox"
				name={name}
				id={id}
				onChange={handleChange}
			/>
			<span
				className={`block w-4 h-4 rounded-circle border-1 group-hover:border-blue-400 z-10 ${!checked ? "border-grayscale-700" : "border-blue-600 bg-blue-400"} `}
			/>
			<Typography
				type={TypographyEnum.BODY1}
				extraClasses="font-300 text-grayscale-700"
			>
				{label}
			</Typography>
		</label>
	);
};
