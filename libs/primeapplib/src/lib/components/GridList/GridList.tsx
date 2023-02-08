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
		<div className="flex align-items-center justify-content-between h-full flex-column gap-0">
			{
				data.map((
					item: SimpleDataList,
					index: number
				) => (
					<div
						key={index}
						className={`h-full w-full flex ${direction === "row" ? "py-4 flex-row justify-content-between" : "py-4 flex-column justify-content-center"} px-6 gap-2 ${index !== data.length -1 && "border-bottom-1"} border-gray-200`}
					>

						<Typography
							extraClasses={`${direction === "row" ? "font-semibold" : "text-gray-400"}`}
						>
							{item.title}
						</Typography>
						<Typography
							type={TypographyEnum.TITLE}
							extraClasses={`${direction === "row" ? "text-gray-400" : "text-common-black"}`}
						>
							{item.value}
						</Typography>
					</div>
				))
			}
		</div>
	);
};
