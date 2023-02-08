import { grayscale400 } from "@mono-redux-starter/shared/color";
import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const tableStyles: CSSStyles = {
	wrapper: {
		width: "100%",
		border: `${pxToRem(1)} solid ${grayscale400}`,
		borderRadius: pxToRem(8),
		overflow: "hidden",
		marginTop: pxToRem(20)
	},
	cell: {
		display: "flex",
		alignItems: "center",
		gap: pxToRem(8)
	},
	paginationWrapper: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: `${pxToRem(4)} ${pxToRem(16)}`,
		marginLeft: "auto",
		gap: pxToRem(20)
	},
};
