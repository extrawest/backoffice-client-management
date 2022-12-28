import { Field } from "formik";
import { FC } from "react";
import { FormikFieldProps } from "./FormikField.types";

export const FormikField: FC<FormikFieldProps> = ({
	id,
	type,
	error,
	name,
	hasError,
	placeholder
}) => (
	<div>
		<Field
			id={id}
			name={name}
			type={type}
			placeholder={placeholder}
		/>
		{hasError && <div>{error}</div> }
	</div>
);
