import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const filterFormStyles: CSSStyles = {
	buttonsWrapper: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		gap: pxToRem(5),
		padding: `${pxToRem(10)} ${pxToRem(20)}`
	}
};
