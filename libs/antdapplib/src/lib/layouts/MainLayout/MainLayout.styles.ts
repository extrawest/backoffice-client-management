import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const layoutStyle: CSSStyles = {
	root: {
		height: "100vh"
	},
	content: {
		padding: `${pxToRem(10)} ${pxToRem(15)}`
	}
};
