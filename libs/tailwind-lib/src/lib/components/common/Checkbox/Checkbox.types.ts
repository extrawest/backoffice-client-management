import { ChangeEventHandler } from "react";

export interface CheckboxProps {
	name: string,
	id: string
	onChange: (val: boolean) => void,
	label: string
}
