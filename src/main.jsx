import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <App />
      </HashRouter>

      <ToastContainer
        position="bottom-right"
        theme="dark"
        pauseOnHover={false}
        closeOnClick={false}
        draggable={false}
        closeButton={false}
      />
    </QueryClientProvider>
  </React.StrictMode>
);