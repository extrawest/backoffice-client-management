import { SelectValue }from "@mono-redux-starter/shared/types";
import { SelectProps as AntdSelectProps } from "antd";

export type SelectProps = AntdSelectProps & {
	data: SelectValue[],
	placeholder?: string,
};
