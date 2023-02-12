import { grayscale400 } from "@mono-redux-starter/shared/color";
import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const containerStyle: CSSStyles = {
	root: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		height: "100vh"
	},
	colWrapper: {
		border: `${pxToRem(1)} solid ${grayscale400}`,
		borderRadius: pxToRem(8),
		width: "100%",
	}
};
