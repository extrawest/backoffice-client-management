import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const gridListStyles: CSSStyles = {
	gridListWrapper: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		padding: 0,
	},
	gridColumn: {
		display: "flex",
		flexDirection: "column",
		padding: `${pxToRem(32)} 0`,
		justifyContent: "center",
		height: "100%"
	},
	gridRow: {
		display: "flex",
		flexDirection: "row",
		padding: `${pxToRem(16)} ${pxToRem(20)}`,
		justifyContent:"space-between",
	}
};
