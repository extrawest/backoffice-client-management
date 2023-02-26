import { errorMain, grayscale200 } from "@mono-redux-starter/shared/color";
import { FC } from "react";
import { Dropdown } from "semantic-ui-react";
import { TypographyEnum } from "../../../types/typography";
import { Typography } from "../Typography/Typography";
import { formikSelectStyle } from "./FormikSelect.styles";
import { FormikSelectProps } from "./FormikSelect.types";

export const FormikSelect: FC<FormikSelectProps> = ({
	placeholder,
	name,
	error,
	value,
	hasError,
	handleChange,
	startAdornment,
	data
}) => {
	return (
		<>
			<div
				style={{
					...formikSelectStyle.wrapper,
					borderColor: hasError ? errorMain : grayscale200
				}}
			>
				<div style={formikSelectStyle.inputWrapper}>
					{startAdornment}
					<Dropdown
						onChange={handleChange}
						placeholder={placeholder}
						fluid
						selection
						value={value}
						options={data}
						style={{
							border: "none"
						}}
					/>
				</div>
			</div>
			{hasError && (
				<Typography
					type={TypographyEnum.BODY1}
					style={formikSelectStyle.error}
				>
					{error}
				</Typography>
			)}
		</>
	);
};
