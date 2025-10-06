import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import "./globals.css";

import { ErrorBoundary } from "@components/feedback/ErrorBoundary";
import { ThemeProvider } from "./providers/ThemeProvider";
import { I18nProvider } from "./providers/I18nProvider";
import { AuthProvider } from "./features/auth/AuthProvider";
import { CityProvider } from "@features/weather/CityContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <I18nProvider>
            <ErrorBoundary>
              <CityProvider>
                <App />
              </CityProvider>
            </ErrorBoundary>
          </I18nProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
