import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary.jsx";
import ToggleThemeProvider from "./providers/themeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary message="Something went wrong loading the app.">
        <ToggleThemeProvider>
          <App />
        </ToggleThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
);
