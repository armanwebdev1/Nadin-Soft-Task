import type React from "react";
import { Suspense } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Box } from "@mui/material";

import { routes } from "@app/routes";
import AppLayout from "@components/layout/AppLayout";
import LoadingState from "@components/feedback/LoadingState";
import { useThemeCtx } from "@providers/ThemeProvider";

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

  const { direction } = useThemeCtx();

  const isLoginPage = location.pathname === "/login";

  return (
    <Box dir={direction}>
      {isLoginPage ? (
        <Suspense fallback={<LoadingState />}>
          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>{element}</PageTransition>
          </AnimatePresence>
        </Suspense>
      ) : (
        <AppLayout>
          <Suspense fallback={<LoadingState />}>
            <AnimatePresence mode="wait">
              <PageTransition key={location.pathname}>{element}</PageTransition>
            </AnimatePresence>
          </Suspense>
        </AppLayout>
      )}
    </Box>
  );
}
