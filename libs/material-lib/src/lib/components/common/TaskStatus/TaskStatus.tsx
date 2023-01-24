import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { taskStatusStyles, typographySx } from "./TaskStatus.styles";
import { TaskStatusProps } from "./TaskStatus.types";

export const TaskStatus: FC<TaskStatusProps> = ({ status }) => {
	return (
		<Box
			sx={taskStatusStyles(status)}
		>
			<Typography
				sx={typographySx(status)}
				variant="body1"
			>
				{status}
			</Typography>
		</Box>
	);
};
