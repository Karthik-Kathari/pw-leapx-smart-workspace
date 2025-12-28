import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { WorkspaceProvider } from "./context/WorkspaceContext";
import "./styles/index.css";
import ErrorBoundary from "./components/common/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <WorkspaceProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </WorkspaceProvider>
    </ThemeProvider>
  </React.StrictMode>
);
