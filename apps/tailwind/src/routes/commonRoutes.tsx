import { AppRouteEnum, RoutesType } from "libs/tailwind-lib/src";
import { lazy } from "react";

const Login = lazy(() => import("../pages/Login/Login"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export const commonRoutes: RoutesType = [
	{
		element: <Login />,
		path: AppRouteEnum.LOGIN,
		exact: true,
		isAuth: false,
		denyShowLoginPage: true,
	},
	{
		element: <NotFound />,
		isAuth: false,
	},
];
