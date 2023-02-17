import { grayscale600 } from "@mono-redux-starter/shared/color";
import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const menuItemStyles: CSSStyles = {
	item: {
		display: "flex",
		alignItems: "center",
		gap: pxToRem(8),
		padding: `${pxToRem(8)} 0`
	},
	link: {
		width: "100%",
		textDecoration: "none",
		cursor: "pointer",
		outline: "none",
		fontSize: pxToRem(18),
		padding: `${pxToRem(8)} ${pxToRem(15)}`
	}
};
