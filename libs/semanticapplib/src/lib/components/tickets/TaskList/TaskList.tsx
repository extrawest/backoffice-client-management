import { grayscale400 } from "@mono-redux-starter/shared/color";
import { TaskDataList, TaskStatusEnum } from "@mono-redux-starter/shared/types";
import { pxToRem } from "@mono-redux-starter/shared/utils";
import { FC, useState } from "react";
import { useIntl } from "react-intl";
import {
	CheckboxProps,
	Form,
	FormField,
	Radio
} from "semantic-ui-react";
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

	const [value, setValue] = useState<string>("");

	const handleChange: CheckboxProps["onChange"] = (
		e,
		dropdownData
	) => {
		setValue(String(dropdownData.value));
	};

	return (
		<Form style={taskListStyles.wrapper}>
			{
				data.map((
					item: TaskDataList,
					index: number
					) => (
					<FormField
						key={index}
						style={{
							...taskListStyles.columnWrapper,
							borderBottom:	index !== data.length - 1 ? `${pxToRem(1)} solid ${grayscale400}` : "none"
						}}
					>
						<div style={taskListStyles.column}>
							<Radio
								label={item.text}
								name="task"
								value={item.taskStatus}
								checked={value === item.taskStatus}
								style={{
									fontWeight: 600
								}}
								onChange={handleChange}
							/>

							<TaskStatus status={item.taskStatus} />
						</div>
					</FormField>
				))
			}
		</Form>
	);
};
