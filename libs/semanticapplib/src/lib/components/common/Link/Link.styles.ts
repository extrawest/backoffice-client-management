import { blue600 } from "@mono-redux-starter/shared/color";
import { pxToRem } from "@mono-redux-starter/shared/utils";
import { CSSProperties } from "react";

export const linkStyle: CSSProperties = {
	color: blue600,
	fontSize: pxToRem(16),
	fontWeight: 500,
	margin: `${pxToRem(5)} 0`
};
