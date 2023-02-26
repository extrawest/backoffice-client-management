import { errorMain, grayscale200 } from "@mono-redux-starter/shared/color";
import { hasErrorForMetaField, pxToRem } from "@mono-redux-starter/shared/utils";
import { Field, FieldProps } from "formik";
import { FC } from "react";
import { Input } from "semantic-ui-react";
import { TypographyEnum } from "../../../types/typography";
import { Typography } from "../Typography/Typography";
import { formikFieldStyle } from "./FormikField.styles";
import { FormikFieldProps } from "./FormikField.types";

export const FormikField: FC<FormikFieldProps> = ({
	name,
	startAdornment,
	...rest
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
							...formikFieldStyle.wrapper,
							borderColor: hasErrorForMetaField(meta) ? errorMain : grayscale200
						}}
					>
						<div style={formikFieldStyle.inputWrapper}>
							{startAdornment}
							<Input
								{...rest}
								{...fieldProps}
								error={Boolean(rest.error)}
								transparent
								style={{
									width: "100%",
									padding: `${pxToRem(5)}`
								}}
								value={value ?? ""}
							/>
						</div>
					</div>
					{hasErrorForMetaField(meta) && (
						<Typography
							type={TypographyEnum.BODY1}
							style={formikFieldStyle.error}
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
