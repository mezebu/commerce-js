import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import "./index.css";
import AppThemeProvider from "./themes/AppThemeProvider";
import Router from "./components/Router/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppThemeProvider>
    <Router>
      <App />
    </Router>
  </AppThemeProvider>
);
