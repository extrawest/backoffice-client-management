import { grayscale400 } from "@mono-redux-starter/shared/color";
import { CSSStyles } from "@mono-redux-starter/shared/types";
import { TypographyEnum } from "../../../types/typography";

export const typographyStyle: CSSStyles = {
	[TypographyEnum.H1]: {
		fontSize: "2.5rem",
		fontWeight: 600,
		textAlign: "center",
		lineHeight: 1.2
	},
	[TypographyEnum.H4]: {
		fontSize: "2rem",
		fontWeight: 500,
		textAlign: "center",
		lineHeight: 1.2
	},
	[TypographyEnum.H5]: {
		fontSize: "1.75rem",
		fontWeight: 500,
		textAlign: "center",
		lineHeight: 1.2
	},
	[TypographyEnum.BODY2]: {
		fontSize: "0.875rem",
		textAlign: "center",
		lineHeight: 1.2
	},
	[TypographyEnum.BODY1]: {
		fontSize: "1rem",
		textAlign: "center",
		lineHeight: 1.2
	},
	[TypographyEnum.BUTTON]: {
		fontSize: "1.5rem",
		textAlign: "center",
		lineHeight: 1.2
	},
	[TypographyEnum.CAPTION]: {
		fontSize: "1.125rem",
		fontWeight: 700,
		textAlign: "center",
		lineHeight: 1.2
	},
	[TypographyEnum.SUBTITLE1]: {
		fontSize: "1.125rem",
		fontWeight: 500,
		textAlign: "center",
		lineHeight: 1.2
	},
	[TypographyEnum.DESCRIPTION]: {
		fontSize: "1rem",
		textAlign: "center",
		lineHeight: 1.2,
		color: grayscale400
	},
	[TypographyEnum.TITLE]: {
		fontSize: "1.125rem",
		fontWeight: 700,
		textAlign: "center",
		lineHeight: 1.2,
		color: grayscale400
	},
} as const;
