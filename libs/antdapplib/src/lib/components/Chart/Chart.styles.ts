import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const chartStyles: CSSStyles = {
	titleWrapper: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "flex-end",
		marginBottom: pxToRem(20),
		flexWrap: "wrap",
		width: "100%"
	},
	title: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		gap: pxToRem(8)
	},
	legendsList: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexWrap: "nowrap",
		maxWidth: pxToRem(240),
		width: "100%",
		gap: pxToRem(10)
	},
	legend: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: pxToRem(8)
	},
	legendColor: {
		display: "block",
		minWidth: pxToRem(30),
		height: pxToRem(4),

	}
};
