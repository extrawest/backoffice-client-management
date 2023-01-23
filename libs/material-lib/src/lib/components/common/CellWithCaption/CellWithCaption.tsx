import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { cellStyles } from "./CellWithCaption.styles";
import { CellWithCaptionProps } from "./CellWithCaption.types";

export const CellWithCaption: FC<CellWithCaptionProps> = ({ mainText, captionFormatMessage, caption }) => {
	return (
		<Box sx={cellStyles["wrapper"]}>
			<Typography
				sx={cellStyles["mainText"]}
				variant="body1"
			>
				{mainText}
			</Typography>
			{caption &&
				<Box
					sx={cellStyles["caption"]}
				>
					{captionFormatMessage &&
						<Typography
							variant="description"
						>
							<FormattedMessage
								id={captionFormatMessage}
							/>
						</Typography>
					}
					<Typography
						variant="description"
					>
						{caption}
					</Typography>
				</Box>
			}
		</Box>
	);
};
