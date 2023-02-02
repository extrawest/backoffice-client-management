import { SelectValue }from "@mono-redux-starter/shared/types";
import { DropDownProps } from "antd";
import { ReactNode } from "react";

export type FormikSelectProps = Omit<DropDownProps, "name"> & {
	name: string,
	data: SelectValue[],
	placeholder?: string,
	startAdornment?: ReactNode,
};
