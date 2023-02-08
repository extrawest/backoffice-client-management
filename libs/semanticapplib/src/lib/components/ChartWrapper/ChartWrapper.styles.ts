import { grayscale400 } from "@mono-redux-starter/shared/color";
import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const chartWrapperStyle: CSSStyles = {
	wrapper: {
		marginTop: pxToRem(20),
		width: "100%",
		border: `${pxToRem(1)} solid ${grayscale400}`,
		borderRadius: pxToRem(8)
	}
};
