import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { TypographyEnum } from "../../../types/typography";
import { Typography } from "../Typography/Typography";
import { CellWithCaptionProps } from "./CellWithCaption.types";

export const CellWithCaption: FC<CellWithCaptionProps> = ({ mainText, captionFormatMessage, caption }) => {
	return (
		<div className="flex flex-column gap-1 p-2 align-items-start">
			<Typography
				extraClasses="font-semibold text-start"
			>
				{mainText}
			</Typography>
			{caption &&
				<div
					className="flex gap-1"
				>
					{captionFormatMessage &&
						<Typography
							type={TypographyEnum.DESCRIPTION}
						>
							<FormattedMessage
								id={captionFormatMessage}
							/>
						</Typography>
					}
					<Typography
						type={TypographyEnum.DESCRIPTION}
					>
						{caption}
					</Typography>
				</div>
			}
		</div>
	);
};
