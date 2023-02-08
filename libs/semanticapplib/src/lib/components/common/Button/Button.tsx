import { FC } from "react";
import { Button as SemanticButton } from "semantic-ui-react";
import { buttonStyle } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({
	outlined,
	...rest
}) => {
	return (
		<SemanticButton
			{...rest}
			style={{
				...(outlined ? buttonStyle.outlined : buttonStyle.default),
				...rest.style
			}}
		/>
	);
};
