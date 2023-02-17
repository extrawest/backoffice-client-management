import { CSSStyles } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const sidebarStyles: CSSStyles = {
	container: {
		padding: `${pxToRem(20)}`,
		height: "calc(100vh - 5px)",
		boxSizing: "border-box"
	},
	sidebarTitleWrapper: {
		marginBottom: pxToRem(8),
		display: "flex",
		flexDirection: "column",
		padding: pxToRem(16),
		gap: pxToRem(15)
	},
	sidebarTitle: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start"
	},
	menuWrapper: {
		height: "65%",
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "space-between"
	},
	menu: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		border: "none",
		boxShadow: "none",
		gap: pxToRem(10)
	},
	copyright: {
		display: "flex",
		alignItems: "center",
		gap: pxToRem(8),
		marginTop: pxToRem(10)
	}
};
