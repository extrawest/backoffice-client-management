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
	AuthContext
} from "@mono-redux-starter/tamplateapp";
import AppRoutes from "../routes";
import { theme } from "../theme";
import React from "react";

const ability = abilityCheckStorage(store);

export const App: FC = () => {
	const [mode, setMode] = useState<PaletteMode>("light");

	const handleChangeMode = () => {
		setMode(mode === "light" ? "dark" : "light");
	};

	return (
		<Provider store={store}>
			<Button onClick={handleChangeMode}>
				Mode
			</Button>
			<HelmetProvider>
				<AppIntlProvider>
						<ThemeProvider theme={theme(mode)}>
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
		</Provider>
	);
};
