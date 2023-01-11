import { Box, Typography } from "@mui/material";
import { PriorityEnum } from "libs/shared/types/src/lib/enums/PriorityEnum";
import { FC } from "react";
import { priorityStatusStyles, typographySx } from "./PriorityStatus.styles";
import { PriorityStatusProps } from "./PriorityStatus.types";

export const PriorityStatus: FC<PriorityStatusProps> = ({ priority }) => {
	return (
		<Box
			sx={priorityStatusStyles(priority)}
		>
			<Typography
				sx={typographySx}
				variant="body1"
			>
				{priority}
			</Typography>
		</Box>
	);
};
