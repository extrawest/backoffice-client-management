import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const clientsContainerStyle: CSSStyles = {
	root: {
		padding: pxToRem(20),
		marginTop: pxToRem(20)
	}
};
