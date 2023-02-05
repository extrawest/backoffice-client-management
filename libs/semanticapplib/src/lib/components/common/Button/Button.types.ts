import { HTMLAttributes, ReactNode } from "react";
import { ButtonProps as SemanticButtonProps } from "semantic-ui-react";

export interface ButtonProps extends SemanticButtonProps {
	outlined?: boolean
}
