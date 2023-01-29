import { TaskDataList, TaskStatusEnum } from "@mono-redux-starter/shared/types";
import { FC } from "react";
import { useIntl } from "react-intl";
import { RadioButton } from "../../common/RadioButton/RadioButton";
import { Typography } from "../../common/Typography/Typography";
import { TaskStatus } from "../TaskStatus/TaskStatus";

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
		<div className="grid grid-rows-3">
			{
				data.map((
					item: TaskDataList,
					index: number
					) => (
					<div
						key={index}
						className="flex py-3.5 px-8 items-center justify-between gap-2.5 border-b-1 border-solid border-grayscale-200 last-of-type:border-none"
					>
						<div className="flex items-center justify-start gap-1 w-full">
							<RadioButton
								id={`radio-${index}`}
								name="task"
								value={item.taskStatus}
							>
								<div className="flex justify-between items-center">
									<Typography
										extraClasses="font-semibold"
									>
										{item.text}
									</Typography>
									<TaskStatus status={item.taskStatus} />
								</div>
							</RadioButton>
						</div>
					</div>
				))
			}
		</div>
	);
};
