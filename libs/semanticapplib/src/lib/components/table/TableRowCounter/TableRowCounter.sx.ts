import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const counterWrapperSx: CSSStyles = {
	wrapper:{
		display: "flex",
		alignItems: "center",
		gap: pxToRem(10),
	},
	dropdown: {
		maxWidth: pxToRem(80),
		minWidth: 0
	}
};
