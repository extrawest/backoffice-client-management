import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const taskStatusStyle: CSSStyles = {
	wrapper: {
		borderRadius: pxToRem(8),
		padding: `${pxToRem(2)} ${pxToRem(4)}`
	}
};
