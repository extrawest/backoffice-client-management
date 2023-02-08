import { commonWhite, grayscale400 } from "@mono-redux-starter/shared/color";
import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const buttonStyle: CSSStyles = {
	default: {
		background: "linear-gradient(177deg, rgba(29,41,146,1) 0%, rgba(47,128,237,1) 100%)",
		color: commonWhite,
		borderRadius: pxToRem(50),
		fontWeight: 500,
		fontSize: pxToRem(18)
	},
	outlined: {
		background: "transparent",
		color: grayscale400,
		borderRadius: pxToRem(8),
		fontWeight: 400,
		border: `${pxToRem(1)} solid ${grayscale400}`
	}
};
