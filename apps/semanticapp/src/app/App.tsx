import { FC } from "react";
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
import { Loader, Modal } from "semantic-ui-react";
import "semantic-ui-less/semantic.less";

const ability = abilityCheckStorage(store);

export const App: FC = () => {

	return (
		<Provider store={store}>
			<HelmetProvider>
				<AppIntlProvider>
					<PersistGate
						loading={
							<Modal
								basic
								open={true}
								size='small'
							>
								<Loader />
							</Modal>
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
										<YupGlobalLocale />
										<AppRoutes />
									</AuthContext>
								</SnackbarProvider>
							</AbilityContext.Provider>
						</BrowserRouter>
					</PersistGate>
				</AppIntlProvider>
			</HelmetProvider>
		</Provider>
	);
};

export default App;
