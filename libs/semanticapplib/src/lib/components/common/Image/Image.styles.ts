import { commonBlack } from "@mono-redux-starter/shared/color";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const imageStyle = {
	wrapper: (
		size: "large" | "small",
		rounded?: boolean
	) => ({
		width: size === "large" ? pxToRem(180) : pxToRem(64),
		height: size === "large" ? pxToRem(180) : pxToRem(64),
		borderRadius: rounded ? "50%" : "0",
		overflow: "hidden",
		boxShadow: `0 0 10px ${commonBlack}`,
	}),
	img: {
		width: "100%",
		height: "100%"
	}
};
