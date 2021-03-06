import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { PhysiciansContextProvider } from "./store/PhysiciansContext";
import { ThemeContextProvider } from "./store/ThemeContext";
import { UIContextProvider } from "./store/UIContext";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <PhysiciansContextProvider>
          <UIContextProvider>
            <App />
          </UIContextProvider>
        </PhysiciansContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
