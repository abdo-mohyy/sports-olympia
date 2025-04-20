import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import WindowContext from "./context/WindowWidthContext/WidthComponent.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import "./style/root.css";
import "./components/Header/header.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <WindowContext>
        <App />
      </WindowContext>
    </StrictMode>
  </BrowserRouter>
);
