import { grayscale400 } from "@mono-redux-starter/shared/color";
import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const chartStyle: CSSStyles = {
	chartWrapper: {
		borderRight: `${pxToRem(1)} solid ${grayscale400}`,
		padding: `${pxToRem(15)} ${pxToRem(20)} ${pxToRem(40)}`,
		height: "100%"
	}
};
