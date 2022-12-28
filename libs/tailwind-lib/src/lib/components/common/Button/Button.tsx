import { mergeStrings } from "@mono-redux-starter/shared/utils";
import { FC } from "react";
import { TypographyEnum } from "../../../types/typography";
import { Typography } from "../Typography/Typography";
import { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({
	children,
	submitType = false,
	extraClasses
}) => {
	return (
		<button
			className={mergeStrings(
				`w-44 rounded-full bg-gradient-to-b from-blue-900 to-blue-600 text-common-white py-2`,
				extraClasses
			)}
			type={submitType ? "submit" : "button"}
		>
			<Typography>
				{children}
			</Typography>
		</button>
	);
};
