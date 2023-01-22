import { FC, MouseEvent } from "react";
import { Button as MuiButton, Box, } from "@mui/material";
import Loader from "../Loader/Loader";
import { buttonStyles } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import { mergeStyles } from "@mono-redux-starter/shared/utils";

export const Button: FC<ButtonProps> = ({
	children,
	isLoading = false,
	isShowText = false,
	outlined,
	...rest
}) => {
	const onInnerBoxClickHandler = (event: MouseEvent) => rest.disabled && event.stopPropagation();

	return (
		<MuiButton
			{...rest}
			sx={mergeStyles(
				!outlined
				? buttonStyles["tableBtn"]
				: buttonStyles["outlined"]
					rest.sx,
				)
			}
		>
			{(!isLoading || isShowText) && (
				<Box
					component="span"
					mr={isShowText ? 1 : 0}
					sx={buttonStyles["boxWrapper"]}
					onClick={onInnerBoxClickHandler}
				>
					{children}
				</Box>
			)}
			{isLoading && <Loader
				color="inherit"
				size={20}
			/>}
		</MuiButton>
	);
};

export default Button;
