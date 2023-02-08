import { SelectValue } from "@mono-redux-starter/shared/types";
import { hasErrorForMetaField, mergeStrings } from "@mono-redux-starter/shared/utils";
import { Field, FieldProps } from "formik";
import { FC, useCallback } from "react";
import { TypographyEnum } from "../../../types/typography";
import { Typography } from "../Typography/Typography";
import { FormikSelectProps } from "./FormikSelect.types";
import { Dropdown } from "primereact/dropdown";
import TreeNode from "primereact/treenode";
import { useIntl } from "react-intl";

export const FormikSelect: FC<FormikSelectProps> = ({
	name,
	startAdornment,
	data,
	...rest
}) => {
	const intl = useIntl();
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
							{startAdornment}
							<Dropdown
								{...rest}
								{...fieldProps}
								placeholder={intl.formatMessage({id: rest.placeholder})}
								options={data}
								optionLabel="name"
								optionValue="value"
								className="w-full border-none outline-none"
								value={value}
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
