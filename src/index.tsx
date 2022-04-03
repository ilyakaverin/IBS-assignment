import * as ReactDOMClient from "react-dom/client";
import App from "./App";

const app = document.getElementById("app") as HTMLDivElement;
const root = ReactDOMClient.createRoot(app);
root.render(<App />);
