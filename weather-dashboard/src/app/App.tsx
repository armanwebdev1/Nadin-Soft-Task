import React, { Suspense } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Box,
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

import { routes } from "@app/routes";
import AppLayout from "@components/layout/AppLayout";
import LoadingState from "@components/feedback/LoadingState";
import { buildTheme } from "@theme/index";
import { useThemeCtx } from "@providers/ThemeProvider";
import { useTranslation } from "react-i18next";

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
  const element = useRoutes(routes);

  const { mode, direction } = useThemeCtx();
  const { i18n } = useTranslation();

  const cache = createCache({
    key: direction === "rtl" ? "mui-rtl" : "mui",
    stylisPlugins: direction === "rtl" ? [prefixer, rtlPlugin] : [prefixer],
  });

  return (
    <CacheProvider value={cache}>
      <MUIThemeProvider theme={buildTheme(mode, direction)}>
        <CssBaseline />
        <Box dir={direction}>
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
      </MUIThemeProvider>
    </CacheProvider>
  );
}
