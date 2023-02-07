import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const ticketsStyle: CSSStyles = {
	wrapper: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		height: "100%"
	},
	titleWrapper: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: `${pxToRem(16)} ${pxToRem(16)} ${pxToRem(8)}`,
	},
	title: {
		width: "75%",
		display: "flex",
		flexDirection: "column",
		gap: pxToRem(4),
		textAlign: "start"
	}
};
