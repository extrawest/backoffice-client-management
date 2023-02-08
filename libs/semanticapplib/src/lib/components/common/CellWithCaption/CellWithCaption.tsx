import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { TypographyEnum } from "../../../types/typography";
import { Typography } from "../Typography/Typography";
import { cellWithCaptionStyles } from "./CellWithCaption.styles";
import { CellWithCaptionProps } from "./CellWithCaption.types";

export const CellWithCaption: FC<CellWithCaptionProps> = ({ mainText, captionFormatMessage, caption }) => {
	return (
		<div style={cellWithCaptionStyles.wrapper}>
			<Typography
				type={TypographyEnum.SUBTITLE1}
				textAlign="start"
			>
				{mainText}
			</Typography>
			{caption &&
				<div
					style={cellWithCaptionStyles.caption}
				>
					{captionFormatMessage &&
						<Typography
							type={TypographyEnum.DESCRIPTION2}
							textAlign="start"
						>
							<FormattedMessage
								id={captionFormatMessage}
							/>
						</Typography>
					}
					<Typography
						type={TypographyEnum.DESCRIPTION2}
						textAlign="start"
					>
						{caption}
					</Typography>
				</div>
			}
		</div>
	);
};
