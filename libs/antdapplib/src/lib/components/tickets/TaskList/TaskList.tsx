import {
	RadioDataList, TaskDataList, TaskStatusEnum
} from "@mono-redux-starter/shared/types";
import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { RadioButton, RadioButtonChangeParams } from "primereact/radiobutton";
import { Typography } from "../../common/Typography/Typography";
import { TaskStatus } from "../TaskStatus/TaskStatus";
import {
	Col, Radio, RadioGroupProps, Row
} from "antd";
import { taskListStyles } from "./TaskList.styles";
import { pxToRem } from "@mono-redux-starter/shared/utils";
import { grayscale400 } from "@mono-redux-starter/shared/color";
import { TypographyParagraph } from "../../common/TypographyParagraph/TypographyParagraph";

export const TaskList: FC = () => {
	const intl = useIntl();
	const [activeTask, setActiveTask] = useState<string>("");

	const handleSetActiveTask: RadioGroupProps["onChange"] = (e) => {
		setActiveTask(e.target.value);
	};

	const data = [
		{
			id: 0,
			label: intl.formatMessage({id: "finishTicket"}),
			value: TaskStatusEnum.URGENT
		},
		{
			id: 1,
			label: intl.formatMessage({id: "createNewTicket"}),
			value: TaskStatusEnum.NEW
		},
		{
			id: 2,
			label: intl.formatMessage({id: "updateTicket"}),
			value: TaskStatusEnum.DEFAULT
		}
	];

	return (
		<Row
			align="middle"
			justify="space-between"
			style={{height: "100%"}}
		>
			<Radio.Group
				defaultValue={data[0].value}
				buttonStyle="solid"
				optionType="default"
				size="large"
				style={taskListStyles.radioGroup}
			>
			{
				data.map((
					item: RadioDataList,
					index: number
					) => (
						<Col
							xs={24}
							key={index}
							style={{
								...taskListStyles.colWrapper,
								borderBottom: index !== data.length - 1 ? `${pxToRem(1)} solid ${grayscale400}` : "none"
							}}
						>
						<Radio.Button
							onChange={handleSetActiveTask}
							value={item.value}
						/>
						<label
							htmlFor={item.label}
							style={taskListStyles.label}
						>
							<TypographyParagraph
								style={{
									fontWeight: 600,
									marginBottom: 0
								}}
							>
								{item.label}
							</TypographyParagraph>
							<TaskStatus status={item.value} />
						</label>
      </Col>
				))
			}
			</Radio.Group>
		</Row>
	);
};
