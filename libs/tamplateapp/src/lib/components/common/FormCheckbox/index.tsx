import { CircleOutlined, CircleSharp } from "@mui/icons-material";
import { Checkbox, FormControlLabel } from "@mui/material";
import { FC } from "react";
import { styles } from "./FormCheckbox.styles";
import { FormCheckboxProps } from "./FormCheckbox.types";

export const FormCheckbox: FC<FormCheckboxProps> = ({ name, label }) => {
	return (
		<FormControlLabel
			label={label}
			name={name}
			control={
				<Checkbox
					sx={styles.field}
					icon={<CircleOutlined />}
					checkedIcon={<CircleSharp />}
				/>
			}
		/>
	);
};
