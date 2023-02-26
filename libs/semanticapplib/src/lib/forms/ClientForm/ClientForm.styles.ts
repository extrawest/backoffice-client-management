import {
	commonWhite,
	grayscale200,
	grayscale600
} from "@mono-redux-starter/shared/color";
import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const clientFormStyles: CSSStyles = {
	dateButtonWrapper:{
		width: "100%",
		position: "relative",
		marginBottom: pxToRem(20)
	},
	dateButtonInput: {
		background: commonWhite,
		border: `${pxToRem(1)} solid ${grayscale200}`,
		color: grayscale600,
		fontSize: pxToRem(16),
		borderRadius: pxToRem(50),
		display: "block",
		width: "100%",
		padding: `${pxToRem(14)} ${pxToRem(10)} ${pxToRem(14)} ${pxToRem(30)}`,
		outline: "none"
	}
};
