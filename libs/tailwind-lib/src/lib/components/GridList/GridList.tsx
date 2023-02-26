import { SimpleDataList } from "@mono-redux-starter/shared/types";
import { FC } from "react";
import { TypographyEnum } from "../../types/typography";
import { Typography } from "../common/Typography/Typography";

import { GridListProps } from "./GridList.types";

export const GridList: FC<GridListProps> = ({
	data,
	direction = "column"
}) => {
	return (
		<div className={`${direction === "row" ? "grid-rows-1 grid-cols-4" : "md:grid-rows-auto md:grid-cols-1 grid-rows-1 grid-cols-4"}`}>
			{
				data.map((
					item: SimpleDataList,
					index: number
				) => (
					<div
						key={index}
						className={`flex ${direction === "row" ? "py-4 flex-row justify-between" : "py-8 flex-col justify-center"} px-8 gap-2.5 border-b-1 border-solid border-b-grayscale-200 last-of-type:border-none`}
					>

						<Typography
							extraClasses={`${direction === "row" ? "font-semibold" : "text-grayscale-400"}`}
						>
							{item.title}
						</Typography>
						<Typography
							type={TypographyEnum.TITLE}
							extraClasses={`${direction === "row" ? "text-grayscale-400" : "text-common-black"}`}
						>
							{item.value}
						</Typography>
					</div>
				))
			}
		</div>
	);
};
