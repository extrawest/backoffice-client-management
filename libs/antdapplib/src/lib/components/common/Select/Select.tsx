import { FC } from "react";
import { SelectProps } from "./Select.types";
import { useIntl } from "react-intl";
import { Select as AntdSelect } from "antd";

export const Select: FC<SelectProps> = ({
	data,
	...rest
}) => {
	const intl = useIntl();
	return (
		<AntdSelect
			placeholder={intl.formatMessage({id: "select"})}
			allowClear
			className="selectDropdown"
			{...rest}
		>
			{
				data.map((item) => (
					<AntdSelect.Option
						key={item.value}
						value={item.value}
					>
						{item.name}
					</AntdSelect.Option>
				))
			}
		</AntdSelect>
	);
};
