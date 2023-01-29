import { mergeStrings } from "@mono-redux-starter/shared/utils";
import { Field } from "formik";
import {
	FC,
	useCallback,
	useState
} from "react";
import { EyeIcon } from "../../../icons";
import { TypographyEnum } from "../../../types/typography";
import { IconButton } from "../IconButton/IconButton";
import { Typography } from "../Typography/Typography";
import { FormikFieldProps } from "./FormikField.types";

export const FormikField: FC<FormikFieldProps> = ({
	id,
	type,
	error,
	name,
	hasError,
	placeholder,
	startAdornment,
	endAdornment
}) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const wrapperClass = useCallback(
		(classes: string) => {
			if(!hasError){
				return mergeStrings(
					classes,
					"border-grayscale-700"
				);
			}
			return mergeStrings(
				classes,
				"border-error-main"
			);
		},
		[hasError]
	);
	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};
	return (
		<div className="w-full mb-4">
			<div className={wrapperClass("rounded-full w-full border-1 overflow-hidden px-4 flex justify-between items-center")}>
				{startAdornment}
				<Field
					id={id}
					name={name}
					type={showPassword ? "text" : type}
					placeholder={placeholder}
					className="w-full outline-none my-2 text-grayscale-700 mx-4"
				/>
				{type === "password" && (
					<IconButton
						onClick={handleShowPassword}
					>
						{!showPassword ? <EyeIcon/> : <EyeIcon fill="#2D9CDB"/>}
					</IconButton>)
				}
			</div>
			{hasError && (
				<Typography
					type={TypographyEnum.BODY1}
					extraClasses="text-error-main mt-1 text-semibold text-start px-4"
				>
					{error}
				</Typography>
			)}
		</div>
	);
};
