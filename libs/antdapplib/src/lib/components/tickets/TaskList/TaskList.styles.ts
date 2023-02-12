import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const taskListStyles: CSSStyles = {
	colWrapper: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		gap: pxToRem(10),
		padding: pxToRem(21),
	},
	radioGroup: {
		width: "100%",
	},
	label: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	}
};
