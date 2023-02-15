import { errorMain } from "@mono-redux-starter/shared/color";
import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const formikFieldStyle: CSSStyles = {
	wrapper: {
		width: "100%",
		margin: "0.75rem 0",
		border: `${pxToRem(1)} solid`,
		borderRadius: pxToRem(50),
		overflow: "hidden",
		padding: `0 ${pxToRem(15)}`
	},
	inputWrapper: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		padding: `${pxToRem(5)} 0`
	},
	error: {
		textAlign: "start",
		color: errorMain,
	}
};
