import { createContext } from "react";

export interface ClientsContextProps {
	handleRecallClients: () => void
};

export const ClientsContext = createContext<ClientsContextProps | null>(null);

export const ClientsProvider = ClientsContext.Provider;
