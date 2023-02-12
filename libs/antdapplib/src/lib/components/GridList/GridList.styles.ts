import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const gridListStyles: CSSStyles = {
	colWrapper: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		gap: pxToRem(10),
		padding: pxToRem(15),
	}
};
