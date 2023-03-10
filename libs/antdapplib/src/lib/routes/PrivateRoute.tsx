import { FC, PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";

import { RootState, useTypedSelector } from "../store";
import { AppRouteEnum } from "../types/paths";

import { PrivateRouteProps } from "./PrivateRoute.types";

export const PrivateRoute: FC<PropsWithChildren<PrivateRouteProps>> = ({
	children,
	roles
}) => {
	const location = useLocation();

	const isLoggedIn = useTypedSelector((state: RootState) => state.authSlice.isLoggedIn);

	if (!isLoggedIn) {
		return (
			<Navigate
				to={AppRouteEnum.LOGIN}
				state={{ from: location }}
				replace
			/>
		);
	}

	return <MainLayout>{children}</MainLayout>;
};

export default PrivateRoute;
