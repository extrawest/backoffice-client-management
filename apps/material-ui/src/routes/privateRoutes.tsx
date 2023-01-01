import { lazy } from "react";
import { AppRouteEnum, PrivateRoutes } from "@mono-redux-starter/tamplateapp";
import { RoleEnum } from "@mono-redux-starter/shared/types";

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Clients = lazy(() => import("../pages/Clients/Clients"));

export const privateRoutes: PrivateRoutes = [
	{
		element: <Dashboard />,
		path: AppRouteEnum.DASHBOARD,
		exact: true,
		roles: [RoleEnum.ROLE_SUPER_ADMIN],
		isAuth: true
	},
	{
		element: <Clients />,
		path: AppRouteEnum.CLIENTS,
		exact: true,
		roles: [RoleEnum.ROLE_SUPER_ADMIN],
		isAuth: true
	},
];
