import { grayscale400 } from "@mono-redux-starter/shared/color";
import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const dashboardStyle: CSSStyles = {
	titleWrapper: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: pxToRem(5)
	},
	dashboardWrapper: {
		display: "flex",
		flexDirection: "column",
		gap: pxToRem(40),
		paddingBottom: pxToRem(16)
	},
	cardsWrapper: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		gap: pxToRem(20)
	},
	card: {
		width: "100%",
		border: `${pxToRem(1)} solid ${grayscale400}`,
		borderRadius: pxToRem(8)
	}
};
