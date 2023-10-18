import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import App from "./App";
import { ProSidebarProvider } from "react-pro-sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router> {/* Wrap your entire application with the Router */}
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>
    </Router>
  </React.StrictMode>
);
