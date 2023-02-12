import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const taskStatusStyle: CSSStyles = {
	wrapper: {
		borderRadius: pxToRem(8),
		padding: `${pxToRem(2)} ${pxToRem(4)}`
	},
	label: {
		fontSize: pxToRem(16),
		margin: 0,
		fontWeight: 600
	}
};
