import { FC, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";

import { SnackbarProvider } from "notistack";
import { abilityCheckStorage, AbilityContext } from "@mono-redux-starter/shared/permissions";
import { YupGlobalLocale } from "@mono-redux-starter/shared/ui";
import { AppIntlProvider } from "@mono-redux-starter/shared/hoks";
import {
	store,
	persistor,
	AuthContext,
} from "@mono-redux-starter/tailwind-lib";
import AppRoutes from "../routes";
import React from "react";

const ability = abilityCheckStorage(store);

export const App: FC = () => {

	return (
		<Provider store={store}>
			<HelmetProvider>
				<AppIntlProvider>
					{/* <PersistGate
						loading={
							<div
								component="div"
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									minHeight: "100vh",
								}}
							>
								<Loader />
							</div>
						}
						persistor={persistor}
					> */}
						<BrowserRouter>
							<AbilityContext.Provider value={ability}>
								<SnackbarProvider
									maxSnack={3}
									anchorOrigin={{
										horizontal: "center",
										vertical: "bottom"
									}}
								>
									<AuthContext>
										<YupGlobalLocale />
										<AppRoutes />
									</AuthContext>
								</SnackbarProvider>
							</AbilityContext.Provider>
						</BrowserRouter>
					{/* </PersistGate> */}
				</AppIntlProvider>
			</HelmetProvider>
		</Provider>
	);
};

export default App;
