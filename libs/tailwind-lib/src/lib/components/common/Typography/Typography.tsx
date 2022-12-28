import { mergeStrings } from "@mono-redux-starter/shared/utils";
import { FC } from "react";
import { TypographyEnum } from "../../../types/typography";
import { TypographyProps } from "./Typography.types";

export const Typography: FC<TypographyProps> = ({children, type, extraClasses}) => {
	switch(type){
		case TypographyEnum.H1:
			return (
				<h1
					className={mergeStrings(
						"lg:text-5.5xl font-semibold text-3xl leading-tight text-center",
						extraClasses
					)}
				>
					{children}
				</h1>
			);
		case TypographyEnum.H4:
			return (
				<h4
					className={mergeStrings(
					"lg:text-4.5xl font-medium text-2xl leading-tight text-center",
					extraClasses
					)}
				>
					{children}
				</h4>
			);
		case TypographyEnum.H5:
			return (
				<h5
					className={mergeStrings(
					"lg:text-4.5xl font-medium text-2xl leading-tight text-center",
					extraClasses
					)}
				>
					{children}
				</h5>
			);
		case TypographyEnum.BODY2:
			return (
				<p
					className={mergeStrings(
					"lg:text-sm text-xs leading-tight text-center",
					extraClasses
					)}
				>
					{children}
				</p>
			);
		case TypographyEnum.BUTTON:
			return (
				<p
					className={mergeStrings(
					"lg:text-2xl text-base text-common-white leading-tight text-center",
					extraClasses
					)}
				>
					{children}
				</p>
			);
		case TypographyEnum.CAPTION:
			return (
				<p
					className={mergeStrings(
					"lg:text-lg font-bold text-xs leading-tight text-center",
					extraClasses
					)}
				>
					{children}
				</p>
			);
		case TypographyEnum.SUBTITLE1:
			return (
				<p
					className={mergeStrings(
					"lg:text-lg font-medium text-base leading-tight text-center",
					extraClasses
					)}
				>
					{children}
				</p>
			);
		case TypographyEnum.DESCRIPTION:
			return (
				<p
					className={mergeStrings(
					"lg:text-base text-sm leading-tight text-grayscale-600 text-center",
					extraClasses
					)}
				>
					{children}
				</p>
			);
		default:
			return (
				<p
					className={mergeStrings(
					"lg:text-base text-sm leading-tight text-center",
					extraClasses
					)}
				>
					{children}
				</p>
			);
	}
};
