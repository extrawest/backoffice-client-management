import { Field, FieldProps } from "formik";
import { FC } from "react";
import { FormikCalendarProps } from "./FormikCalendar.types";
import { Calendar } from "primereact/calendar";
import { hasErrorForMetaField } from "@mono-redux-starter/shared/utils";
import { TypographyEnum } from "../../../types/typography";
import { Typography } from "../Typography/Typography";

export const FormikCalendar: FC<FormikCalendarProps> = ({ name, ...rest }) => {
	return (
		<Field
			name={name}
			className="w-full mb-4"
		>
			{({ field, meta }: FieldProps) => {
						const { value, ...fieldProps } = field;
						return (
							<div className="w-full flex flex-column gap-2 mb-4">
								<div className={`card rounded-full w-full border-round-half border-1 border-solid overflow-hidden px-4 py-2 flex justify-content-start align-items-center gap-3 ${meta.error ? "border-red-700" : "border-gray-400"}`}>
									<Calendar
										{...rest}
										{...fieldProps}
										inputClassName={`w-full border-none text-lg outline-none`}
										value={value ?? ""}
									/>
								</div>
								{hasErrorForMetaField(meta) && (
									<Typography
										type={TypographyEnum.BODY1}
										extraClasses="text-error-main mt-1 text-semibold text-start px-4 text-red-500"
									>
										{meta.error}
									</Typography>
								)}
							</div>
						);
					}}
		</Field>
	);
};
