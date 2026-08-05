import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { FavoriteProvider } from "./context/FavoriteContext";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <FavoriteProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavoriteProvider>
    </ThemeProvider>
  </React.StrictMode>
);