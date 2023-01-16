import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./View/Components/App";

import ColorModeProvider from "./View/Themes/ColorModeContext";
import ScrollingProvider from "./View/Services/Scrolling.service";
import Routing from "./View/Services/Routing.service";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ColorModeProvider>
    <ScrollingProvider>
      <Routing>
        <App />
      </Routing>
    </ScrollingProvider>
  </ColorModeProvider>
);
