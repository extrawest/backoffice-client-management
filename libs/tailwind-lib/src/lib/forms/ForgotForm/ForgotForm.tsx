import { FC } from "react";
import { useIntl } from "react-intl";
import { Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { validateShema } from "./ForgotForm.schema";
import type { ForgotFormProps } from "./ForgotForm.types";
import { UserIcon } from "../../icons";
import { AppRouteEnum } from "../../types";
import { FormikField } from "../../components/common/FormikField/FormikField";
import { Button } from "../../components/common/Button/Button";
import { Link } from "../../components/common/Link/Link";

export const ForgotForm: FC<ForgotFormProps> = ({
	initialValues,
	isLoading,
	onSubmit
}) => {
	const intl = useIntl();

	const loginText = intl.formatMessage({
		id: "template.email",
		defaultMessage: "Email"
	});

	return (
		<Formik
			initialValues={initialValues}
			validateOnBlur={false}
			validationSchema={validateShema}
			onSubmit={onSubmit}
		>
			{({errors, touched, }) => (
				<Form className="w-full flex flex-col items-center justify-center">
					<FormikField
						type="text"
						id="email"
						name="email"
						placeholder={loginText}
						hasError={Boolean(errors.email && touched.email)}
						error={errors.email}
						startAdornment={<UserIcon />}
					/>
					<Button
						submitType
						extraClasses="mb-2"
					>
						{intl.formatMessage({
							id: "template.reset",
							defaultMessage: "Reset"
						})}
					</Button>
					<Link to={AppRouteEnum.LOGIN}>
						<Typography
							variant="body1"
						>
							{intl.formatMessage({
								id: "return"
							})}
						</Typography>
					</Link>
				</Form>
			)}
		</Formik>
	);
};

export default ForgotForm;
