import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const tableActionsStyles: CSSStyles = {
	wrapper: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: `${pxToRem(20)} ${pxToRem(16)}`
	},
	header: {
		display: "flex",
		alignItems: "center",
		gap: pxToRem(12)
	}
};
