import { errorMain, grayscale200 } from "@mono-redux-starter/shared/color";
import { hasErrorForMetaField, pxToRem } from "@mono-redux-starter/shared/utils";
import { Field, FieldProps } from "formik";
import { FC, useState } from "react";
import { Button, Input } from "semantic-ui-react";
import { TypographyEnum } from "../../../types/typography";
import { Typography } from "../Typography/Typography";
import { formikFieldStyle } from "./FormikField.styles";
import { FormikPasswordFieldProps } from "./FormikPasswordField.types";

export const FormikPasswordField: FC<FormikPasswordFieldProps> = ({
	name,
	startAdornment,
	...rest
}) => {
	const [showPass, setShowPass] = useState<boolean>(false);

	const handleShowPassword = () => {
		console.log(1);
		setShowPass(!showPass);
	};

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
								type={showPass ? "text" : "password"}
								transparent
								style={{
									width: "100%",
									padding: `${pxToRem(5)}`
								}}
								value={value ?? ""}
							/>
							<Button
								circular
								type="button"
								onClick={handleShowPassword}
								icon={showPass ? "eye slash" : "eye"}
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
