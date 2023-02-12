import { FC } from "react";
import { SelectProps } from "./Select.types";
import { useIntl } from "react-intl";
import { Select as AntdSelect } from "antd";
import { Option } from "antd/es/mentions";
import { selectStyles } from "./Select.styles";

export const Select: FC<SelectProps> = ({
	data,
	...rest
}) => {
	const intl = useIntl();
	return (
		<AntdSelect
			placeholder={intl.formatMessage({id: "select"})}
			allowClear
			style={selectStyles.select}
			className="selectDropdown"
			{...rest}
		>
			{
				data.map((item) => (
					<Option
						key={item.value}
						value={item.value}
					>
						{item.name}
					</Option>
				))
			}
		</AntdSelect>
	);
};
