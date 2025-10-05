import React, { Suspense } from "react";
import { useLocation, useRoutes, Navigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import { AnimatePresence, motion } from "framer-motion";
import LoadingState from "../components/feedback/LoadingState";
import DashboardPage from "../features/weather/DashboardPage";
import LoginPage from "../features/auth/LoginPage";

// i18n + RTL support
import { useTranslation } from "react-i18next";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { buildTheme } from "../theme";

const rtlCache = createCache({
  key: "mui-rtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const PageTransition: React.FC<React.PropsWithChildren> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const location = useLocation();
  const { i18n } = useTranslation();
  const dir = i18n.language === "fa" ? "rtl" : "ltr";

  const element = useRoutes([
    { path: "/", element: <DashboardPageWrapper /> },
    { path: "/login", element: <LoginPageWrapper /> },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);

  return (
    <CacheProvider value={dir === "rtl" ? rtlCache : undefined}>
      <ThemeProvider theme={buildTheme("light", dir)}>
        <CssBaseline />
        <Box dir={dir}>
          <AppLayout>
            <Suspense fallback={<LoadingState />}>
              <AnimatePresence mode="wait">
                <PageTransition key={location.pathname}>
                  {element}
                </PageTransition>
              </AnimatePresence>
            </Suspense>
          </AppLayout>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}

function DashboardPageWrapper() {
  const { i18n } = useTranslation();
  return (
    <motion.div
      key={i18n.language}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <DashboardPage />
    </motion.div>
  );
}

function LoginPageWrapper() {
  const { i18n } = useTranslation();
  return (
    <motion.div
      key={i18n.language}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <LoginPage />
    </motion.div>
  );
}
