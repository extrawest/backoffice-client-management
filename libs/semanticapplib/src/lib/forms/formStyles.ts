import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const commonFormStyles: CSSStyles = {
	wrapper: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		gap: pxToRem(5)
	},
	spaceBetweenWrapper: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		gap: pxToRem(10),
		width: "100%"
	}
};
