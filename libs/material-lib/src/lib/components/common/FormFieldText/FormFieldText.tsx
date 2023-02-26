import {
	FC,
	useMemo,
	useState
} from "react";
import { Field, FieldProps } from "formik";
import { hasErrorForMetaField } from "@mono-redux-starter/shared/utils";
import TextField from "../../common/TextField/TextField";
import { styles } from "./FormFieldText.styles";
import type { FormFieldTextProps } from "./FormFieldText.types";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const FormFieldText: FC<FormFieldTextProps> = ({
	name,
	title = "",
	...rest
}) => {
	const [isPassShown, setIsPassShown] = useState<boolean>(false);
	const endAdornment = useMemo(
		() => {
			if(rest.type !== "password"){
				return <></>;
			}
			return !isPassShown ? <Visibility /> : <VisibilityOff />;
		},
		[isPassShown]
	);

	const handleClickAdormnent = () => {
		if(rest.type === "password"){
			setIsPassShown(!isPassShown);
		}
	};

	return (
		<Field
			name={name}
			sx={rest.sx ?? styles.field }

		>
			{({ field, meta }: FieldProps) => {
				const { value, ...fieldProps } = field;
				return (
					<TextField
						{...rest}
						{...fieldProps}
						endIcon={endAdornment}
						onAdornmentClick={handleClickAdormnent}
						error={hasErrorForMetaField(meta)}
						helperText={meta.touched ? meta.error : ""}
						value={value ?? ""}
						type={isPassShown ? "text" : rest.type}
					/>
				);
			}}
		</Field>
	);
};

export default FormFieldText;
