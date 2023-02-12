import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const tasksStyle: CSSStyles = {
	titleWrapper: {
		padding: pxToRem(15)
	},
	colWrapper: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		gap: pxToRem(10),
		padding: pxToRem(21)
	},
};
