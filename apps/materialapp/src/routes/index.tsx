import { FC, Suspense } from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {
	Loader,
	PrivateRoute,
	PageLayout,
	PublicRoute
} from "@mono-redux-starter/material-lib";
import { commonRoutes } from "./commonRoutes";
import { privateRoutes } from "./privateRoutes";

const AppRoutes: FC = () => {
	return (
		<Suspense
			fallback={
				<Box
					component="div"
					display="flex"
					justifyContent="center"
					alignItems="center"
					height={"100vh"}
				>
					<Loader />
				</Box>
			}
		>
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
