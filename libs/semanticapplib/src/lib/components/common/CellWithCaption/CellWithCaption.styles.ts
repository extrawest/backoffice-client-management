import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const cellWithCaptionStyles: CSSStyles = {
	wrapper: {
		display: "flex",
		flexDirection: "column",
		gap: pxToRem(4),
		padding: pxToRem(8)
	},
	caption: {
		display: "flex",
		gap: pxToRem(2)
	}
};
