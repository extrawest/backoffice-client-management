import { TaskDataList, TaskStatusEnum } from "@mono-redux-starter/shared/types";
import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { RadioButton, RadioButtonChangeParams } from "primereact/radiobutton";
import { Typography } from "../../common/Typography/Typography";
import { TaskStatus } from "../TaskStatus/TaskStatus";

export const TaskList: FC = () => {
	const intl = useIntl();
	const [activeTask, setActiveTask] = useState<string>("");

	const handleSetActiveTask = (e: RadioButtonChangeParams) => {
		setActiveTask(e.value);
	};

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
		<div className="flex flex-column">
			{
				data.map((
					item: TaskDataList,
					index: number
					) => (
					<div
						key={index}
						className="flex py-4 px-6 align-items-center justify-content-between gap-3 border-bottom-1 border-gray-200 last-of-type:border-none relative"
					>
						<RadioButton
							className={`border-1 border-solid border-gray-400 border-circle flex align-items-center justify-content-center w-1-5rem h-1-5rem ${activeTask === item.text ? "bg-blue-600" : "bg-transparent"}`}
							inputId={`${item.id}-task`}
							name="task"
							value={item.text}
							checked={activeTask === item.text}
							defaultChecked={index === 0}
							onChange={handleSetActiveTask}
						/>
						<label
							htmlFor={item.text}
							className="flex justify-content-between align-items-center w-full"
						>
							<Typography
								extraClasses="font-semibold"
							>
								{item.text}
							</Typography>
							<TaskStatus status={item.taskStatus} />
						</label>
					</div>
				))
			}
		</div>
	);
};
