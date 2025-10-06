import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const LoadingState: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        py: 10,
        textAlign: "center",
      }}
    >
      <Box
        component={motion.div}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
        sx={{
          width: 72,
          height: 72,
          borderRadius: "50%",
          border: "4px solid transparent",
          borderTop: (t) =>
            `4px solid ${t.palette.mode === "light" ? "#9e9e9e" : "#aaa"}`,
          borderRight: (t) =>
            `4px solid ${t.palette.mode === "light" ? "#e0e0e0" : "#555"}`,
          boxShadow:
            "0 0 10px rgba(0,0,0,0.08), inset 0 0 6px rgba(0,0,0,0.05)",
        }}
      />

      <Typography
        component={motion.p}
        variant="body1"
        sx={{
          mt: 3,
          fontWeight: 500,
          letterSpacing: "0.05em",
          color: "text.secondary",
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {t("loading", "Loading…")}
      </Typography>
    </Box>
  );
};

export default LoadingState;
