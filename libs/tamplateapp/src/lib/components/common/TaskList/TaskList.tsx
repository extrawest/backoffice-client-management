import { TaskDataList, TaskStatusEnum } from "@mono-redux-starter/shared/types";
import { CheckCircleRounded, CircleOutlined } from "@mui/icons-material";
import {
	FormControl,
	FormControlLabel,
	RadioGroup,
	Grid,
	Typography,
	Radio,
	Box
} from "@mui/material";
import { FC } from "react";
import { useIntl } from "react-intl";
import { TaskStatus } from "../TaskStatus/TaskStatus";
import {
	taskListItemStyle,
	taskListItemLabelStyle,
	checkedIconStyle
} from "./TaskList.styles";

export const TaskList: FC = () => {
	const intl = useIntl();

	const data = [
		{
			id: 0,
			text: intl.formatMessage({id: "finishTicket"}),
			taskStatus: TaskStatusEnum.URGENT
		},
		{
			id: 1,
			text: intl.formatMessage({id: "createNewTicket"}),
			taskStatus: TaskStatusEnum.NEW
		},
		{
			id: 2,
			text: intl.formatMessage({id: "updateTicket"}),
			taskStatus: TaskStatusEnum.DEFAULT
		}
	];

	return (
		<FormControl>
			<RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
				<Grid
					container
					>
					{
						data.map((
							item: TaskDataList,
							index: number
							) => (
							<Grid
								sx={taskListItemStyle}
								key={index}
								item
								xs={12}
							>
								<Box sx={taskListItemLabelStyle}>
									<FormControlLabel
										value={item.taskStatus}
										control={<Radio
											icon={<CircleOutlined />}
											checkedIcon={<CheckCircleRounded sx={checkedIconStyle}/>}
										/>}
										label=""
									/>
									<Typography
										variant="body1"
										fontWeight={600}
									>
										{item.text}
									</Typography>
								</Box>
								<TaskStatus status={item.taskStatus} />
							</Grid>
						))
					}
				</Grid>
			</RadioGroup>
		</FormControl>
	);
};
