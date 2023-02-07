import { errorMain, grayscale200 } from "@mono-redux-starter/shared/color";
import { SelectValue } from "@mono-redux-starter/shared/types";
import { hasErrorForMetaField, mergeStrings } from "@mono-redux-starter/shared/utils";
import { Field, FieldProps } from "formik";
import { FC, useCallback } from "react";
import { Dropdown } from "semantic-ui-react";
import { TypographyEnum } from "../../../types/typography";
import { Typography } from "../Typography/Typography";
import { formikSelectStyle } from "./FormikSelect.styles";
import { FormikSelectProps } from "./FormikSelect.types";

export const FormikSelect: FC<FormikSelectProps> = ({
	placeholder,
	name,
	startAdornment,
	data
}) => {

	return (
		<Field
			name={name}
		>
		{({ field, meta }: FieldProps) => {
			const { value, ...fieldProps } = field;
			return (
				<>
					<div
						style={{
							...formikSelectStyle.wrapper,
							borderColor: hasErrorForMetaField(meta) ? errorMain : grayscale200
						}}
					>
						<div style={formikSelectStyle.inputWrapper}>
							{startAdornment}
							<Dropdown
								placeholder={placeholder}
								fluid
								selection
								options={data}
								style={{
									border: "none"
								}}
							/>
						</div>
					</div>
					{hasErrorForMetaField(meta) && (
						<Typography
							type={TypographyEnum.BODY1}
							style={formikSelectStyle.error}
						>
							{meta.error}
						</Typography>
					)}
				</>
			);
		}}
  </Field>
	);
};
