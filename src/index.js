import React from "react";
import ReactDOM from "react-dom/client";
import App from "./View/Components/App";
import ColorModeProvider from "./View/Themes/ColorModeContext";
import "./index.scss";
import ScrollingProvider from "./View/Services/Scrolling";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorModeProvider>
      <ScrollingProvider>
        <App />
      </ScrollingProvider>
    </ColorModeProvider>
  </React.StrictMode>
);
