import { createRoot } from "react-dom/client";

import "../src/sass/main.scss";

import App from "./App";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(<App />);
