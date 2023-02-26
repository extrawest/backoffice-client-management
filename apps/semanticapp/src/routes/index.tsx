import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
	PrivateRoute,
	PageLayout,
	PublicRoute
} from "@mono-redux-starter/semanticapplib";
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
							<PrivateRoute >
								<PageLayout>
									{route.element}
								</PageLayout>
							</PrivateRoute>
						) : (
							<PublicRoute
								denyShowLoginPage={route?.denyShowLoginPage}

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
