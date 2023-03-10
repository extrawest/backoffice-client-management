import { lazy } from "react";
import { AppRouteEnum, RoutesType } from "@mono-redux-starter/material-lib";

const LoginPage = lazy(() => import("../pages/Login/Login"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const Forgot = lazy(() => import("../pages/Forgot/Forgot"));
const Registration = lazy(() => import("../pages/Registration/Registration"));

export const commonRoutes: RoutesType = [
	{
		element: <LoginPage />,
		path: AppRouteEnum.LOGIN,
		exact: true,
		isAuth: false,
		denyShowLoginPage: true,
	},
	{
		element: <NotFound />,
		isAuth: false,
	},
	{
		element: <Forgot />,
		path: AppRouteEnum.FORGOT,
		isAuth: false,
	},
	{
		element: <Registration />,
		path: AppRouteEnum.REGISTRATION,
		isAuth: false,
	},
];
