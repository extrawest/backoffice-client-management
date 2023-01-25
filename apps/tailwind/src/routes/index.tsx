import { FC, Suspense } from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {
	PrivateRoute,
	PageLayout,
	PublicRoute
} from "@mono-redux-starter/tailwind-lib";
import { commonRoutes } from "./commonRoutes";
import { privateRoutes } from "./privateRoutes";

const AppRoutes: FC = () => {
	return (
		<Suspense>
			<Routes>
				{[
					...privateRoutes,
					...commonRoutes,
				].map((
					route, index
				) => (
					<Route
						{...route}
						key={`r_${index}_${route.path}`}
						element={route.isAuth ? (
							<PrivateRoute roles={route.roles}>
								<PageLayout>
									{route.element}
								</PageLayout>
							</PrivateRoute>
						) : (
							<PublicRoute
								denyShowLoginPage={route?.denyShowLoginPage}
								roles={route.roles}
							>
								<PageLayout>
									{route.element}
								</PageLayout>
							</PublicRoute>
						)}
					/>))}
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
