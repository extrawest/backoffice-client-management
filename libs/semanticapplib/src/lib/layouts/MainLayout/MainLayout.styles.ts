import { pxToRem } from "@mono-redux-starter/shared/utils";

export const mainLayoutStyles = {
	layoutContainer: {
		display: "flex",
		overflow: "hidden",
		height: "100vh"
	},
	content: {
		padding: pxToRem(20)
	},
	seachInput: {
		width: "100%",
		margin: "0.75rem 0",
		border: `${pxToRem(1)} solid`,
		borderRadius: pxToRem(50),
		overflow: "hidden",
		padding: `0 ${pxToRem(15)}`,
		maxWidth: pxToRem(320)
	}
};
