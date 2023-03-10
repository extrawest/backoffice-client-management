import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const taskListStyles: CSSStyles = {
	wrapper: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		padding: 0,
	},
	columnWrapper: {
		display: "flex",
		flexDirection: "column",
		padding: `${pxToRem(14)} 0`,
		justifyContent: "center",
		height: "100%",
		margin: 0
	},
	column: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		gap: pxToRem(8),
		width: "100%",
		padding: `0 ${pxToRem(15)}`
	}
};
