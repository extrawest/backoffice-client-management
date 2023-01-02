import { lazy } from "react";
import { AppRouteEnum, RoutesType } from "@mono-redux-starter/tamplateapp";

const LoginPage = lazy(() => import("../pages/Login/Login"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const Forgot = lazy(() => import("../pages/Forgot/Forgot"));

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
];
