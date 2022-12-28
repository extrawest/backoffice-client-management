import { lazy } from "react";
import { RoleEnum } from "@mono-redux-starter/shared/types";
import { AppRouteEnum, PrivateRoutes } from "libs/tailwind-lib/src";

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Units = lazy(() => import("../pages/Units/Units"));

export const privateRoutes: PrivateRoutes = [
	{
		element: <Dashboard />,
		path: AppRouteEnum.DASHBOARD,
		exact: true,
		roles: [RoleEnum.ROLE_SUPER_ADMIN],
		isAuth: true
	},
	{
		element: <Units />,
		path: AppRouteEnum.UNITS,
		exact: true,
		roles: [RoleEnum.ROLE_SUPER_ADMIN],
		isAuth: true
	},
];
