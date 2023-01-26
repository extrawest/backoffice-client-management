import { SelectValue } from "@mono-redux-starter/shared/types";
import { mergeStrings } from "@mono-redux-starter/shared/utils";
import { Field } from "formik";
import { FC, useCallback } from "react";
import { TypographyEnum } from "../../../types/typography";
import { Typography } from "../Typography/Typography";
import { FormikSelectProps } from "./FormikSelect.types";

export const FormikSelect: FC<FormikSelectProps> = ({
	placeholder,
	name,
	error,
	hasError,
	startAdornment,
	id,
	data
}) => {
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
	return (
		<div className="w-full mb-4">
			<div className={wrapperClass("rounded-full w-full border-1 overflow-hidden px-4 flex justify-between items-center")}>
				{startAdornment}
				<Field
					id={id}
					name={name}
					as="select"
					placeholder={placeholder}
					className="w-full outline-none my-2 text-grayscale-700 mx-4"
				>
					{
						data.map((item: SelectValue) => (
							<option
								key={item.id}
								value={item.value}
							>
								{item.name}
							</option>
						))
					}
				</Field>
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
