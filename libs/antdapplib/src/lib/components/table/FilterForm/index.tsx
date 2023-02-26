import { PriorityEnum } from "@mono-redux-starter/shared/types";
import {
	Button,
	Col,
	Divider,
	Form,
	Row
} from "antd";
import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { formStyles } from "../../../forms/commonForms.styles";
import { Select } from "../../common/Select/Select";
import { FilterFormProps } from "./FilterForm.types";

export const FilterForm: FC<FilterFormProps>= ({
	handleFilter,
	isFilterActive,
	handleClose,
	activePriority,
	setActivePriority
}) => {
	const processedPriority = () => {

		const data = Object.values(PriorityEnum).map((
			priority, index
		) => ({
			id: index,
			name: priority,
			value: priority
		}));
		return data;
	};

	return (
		<Form
			onFinish={handleFilter}
			style={formStyles.form}
		>
			<Divider dashed/>
			<Form.Item
				name="priority"
				rules={[{ required: true }]}
			>
				<Select
					defaultValue={activePriority}
					data={processedPriority()}
				/>
			</Form.Item>
			<Divider dashed/>
			<Row
				align="middle"
				justify="center"
			>
				<Col span={11}>
					<Button
						type="dashed"
						htmlType="button"
						onClick={handleClose}
					>
						<FormattedMessage id="clear" />
					</Button>
				</Col>
				<Col span={11}>
					<Button
						type="primary"
						htmlType="submit"
					>
						<FormattedMessage id="template.submit" />
					</Button>
				</Col>
			</Row>
		</Form>
	);
};
