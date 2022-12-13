import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { FormikHelpers } from "formik";
import { updateIsLoggedIn } from "@mono-redux-starter/redux";
import { useTypedDispatch } from "../../../store";
import { AppRouteEnum } from "../../../types";
import { styles } from "./LoginContainer.styles";

export const TailwindLoginContainer: FC = () => {
	const navigate = useNavigate();
	const dispatch = useTypedDispatch();

	const initialValuesLogin = {
		username: "",
		password: ""
	};

	// const onSubmit = async(
	// 	values: Values, form: FormikHelpers<Values>
	// ) => {
	// 	// login logic...

	// 	dispatch(updateIsLoggedIn(true));
	// 	navigate(AppRouteEnum.DASHBOARD);

	// 	form.setSubmitting(false);
	// };

	return (
		<div className="text-primaryColor-600 h-20 w-20 flex items-center justify-center">
			Tailwind
		</div>
	);
};
