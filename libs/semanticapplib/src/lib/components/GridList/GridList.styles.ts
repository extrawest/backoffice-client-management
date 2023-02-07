import { commonBlack, grayscale400 } from "@mono-redux-starter/shared/color";
import { pxToRem } from "@mono-redux-starter/shared/utils";
import { CSSProperties } from "react";

export const gridListStyles = {
	gridListWrapper: {
		height: "100%"
	},
	gridColumn: (direction: "row" | "column"): CSSProperties => ({
		display: "flex",
		flexDirection: "column",
		padding: direction === "row" ? `${pxToRem(16)} 0` : `${pxToRem(32)} 0`,
		justifyContent: direction === "row" ? "space-between": "center"
	}),
	title: (direction: "row" | "column"): CSSProperties => ({
		fontWeight: direction === "row" ? 600 : 400,
	}),
	value: (direction: "row" | "column"): CSSProperties => ({
		color: direction === "row" ? grayscale400 : commonBlack,
	}),
};
