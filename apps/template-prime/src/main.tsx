import { createRoot } from "react-dom/client";
import { App } from "./app/app";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(<App />);