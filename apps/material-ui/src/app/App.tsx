import { FC, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import {
	Box,
	Button,
	CssBaseline,
	PaletteMode
} from "@mui/material";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material/styles";
import { abilityCheckStorage, AbilityContext } from "@mono-redux-starter/shared/permissions";
import { YupGlobalLocale } from "@mono-redux-starter/shared/ui";
import { AppIntlProvider } from "@mono-redux-starter/shared/hoks";
import {
	store,
	Loader,
	persistor,
	AuthContext,
	theme
} from "@mono-redux-starter/tamplateapp";
import AppRoutes from "../routes";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const ability = abilityCheckStorage(store);

export const App: FC = () => {

	return (
		<Provider store={store}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<HelmetProvider>
					<AppIntlProvider>
							<ThemeProvider theme={theme}>
								<PersistGate
									loading={
										<Box
											component="div"
											sx={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												minHeight: "100vh",
											}}
										>
											<Loader />
										</Box>
									}
									persistor={persistor}
								>
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
													<CssBaseline />
													<YupGlobalLocale />
													<AppRoutes />
												</AuthContext>
											</SnackbarProvider>
										</AbilityContext.Provider>
									</BrowserRouter>
								</PersistGate>
							</ThemeProvider>
					</AppIntlProvider>
				</HelmetProvider>
			</LocalizationProvider>
		</Provider>
	);
};
