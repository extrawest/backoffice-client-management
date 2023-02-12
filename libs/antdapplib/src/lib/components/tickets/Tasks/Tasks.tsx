import { FC, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { AppRouteEnum } from "../../../types";
import { TaskList } from "../TaskList/TaskList";
import { TicketCreateFormWrapper } from "../TicketCreateFormWrapper/TicketCreateFormWrapper";
import { Modal } from "../../common/Modal/Modal";
import { tasksStyle } from "./Tasks.styles";
import {
	Button,
	Col,
	Row
} from "antd";
import { TypographyTitle } from "../../common/TypographyTitle/TypographyTitle";
import { TypographyParagraph } from "../../common/TypographyParagraph/TypographyParagraph";
import { pxToRem } from "@mono-redux-starter/shared/utils";
import { grayscale400 } from "@mono-redux-starter/shared/color";
import { PlusOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link";

export const Tasks: FC = () => {
	const intl = useIntl();
	const [open, setOpen] = useState<boolean>(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<>
			<Row
				align="middle"
				justify="space-between"
				style={tasksStyle.titleWrapper}
			>
				<Row>
					<Col span={24}>
						<TypographyTitle
							level={5}
						>
							<FormattedMessage id="tasks"/>
						</TypographyTitle>
					</Col>
					<Col span={24}>
						<TypographyParagraph style={{textAlign: "start"}}>
							<FormattedMessage
								id="today"
							/>
						</TypographyParagraph>
					</Col>
				</Row>
				<Link
					href={AppRouteEnum.CLIENTS}
				>
					<FormattedMessage id="viewAll" />
				</Link>
			</Row>
			<div className="flex flex-col justify-end">
				<div
					style={{
						...tasksStyle.colWrapper,
						borderBottom: `${pxToRem(1)} solid ${grayscale400}`
					}}
				>
					<TypographyParagraph
						style={{color: grayscale400}}
					>
						<FormattedMessage id="createNewTask" />
					</TypographyParagraph>
					<Button
						onClick={handleOpen}
						type="ghost"
						style={{
							marginTop: "auto",
						}}
					>
						<PlusOutlined />
					</Button>
				</div>
				<TaskList />
			</div>
			<Modal
				handleClose={handleClose}
        open={open}
        title={intl.formatMessage({ id: "addNewTicket" })}
			>
				<TicketCreateFormWrapper handleClose={handleClose} />
			</Modal>
		</>
	);
};
