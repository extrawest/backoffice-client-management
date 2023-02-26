import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const chartStyles: CSSStyles = {
	titleWrapper: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "flex-end",
		marginBottom: pxToRem(30)
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
		gap: pxToRem(20)
	},
	legend: {
		display: "flex",
		alignItems: "center",
		gap: pxToRem(10)
	},
	legendColor: {
		display: "block",
		width: pxToRem(30),
		height: pxToRem(4),

	}
};
