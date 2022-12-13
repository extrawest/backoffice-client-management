import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { FormikHelpers } from "formik";
import { updateIsLoggedIn } from "@mono-redux-starter/redux";
import { useTypedDispatch } from "../../../store";
import { AppRouteEnum } from "../../../types";
import { styles } from "./LoginContainer.styles";

export const PrimeLoginContainer: FC = () => {
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
		
<div className="card">
    <div className="card-container blue-container overflow-hidden">
        <div className="flex">
            <div className="flex-initial flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round">Prime</div>
            <div className="flex-initial flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round">Prime and PrimeFlex</div>
        </div>
        <div className="flex">
            <div className="flex-initial flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round">Prime</div>
            <div className="flex-initial flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round">Prime and PrimeFlex</div>
            <div className="flex-initial flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
        </div>
    </div>
</div>
	);
};
