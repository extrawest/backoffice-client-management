import { grayscale400 } from "@mono-redux-starter/shared/color";
import { TaskDataList, TaskStatusEnum } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";
import { FC } from "react";
import { useIntl } from "react-intl";
import { Radio } from "semantic-ui-react";
import { Typography } from "../../common/Typography/Typography";
import { TaskStatus } from "../TaskStatus/TaskStatus";
import { taskListStyles } from "./TaskList.styles";

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
		<div style={taskListStyles.wrapper}>
			{
				data.map((
					item: TaskDataList,
					index: number
					) => (
					<div
						key={index}
						style={{
							...taskListStyles.columnWrapper,
							borderBottom:	index !== data.length - 1 ? `${pxToRem(1)} solid ${grayscale400}` : "none"
						}}
					>
						<div style={taskListStyles.column}>
							<Radio
								label={item.text}
								style={{
									fontWeight: 600
								}}
							/>

							<TaskStatus status={item.taskStatus} />
						</div>
					</div>
				))
			}
		</div>
	);
};
