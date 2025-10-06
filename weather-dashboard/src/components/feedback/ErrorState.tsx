import React from "react";
import { Typography, Paper } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { motion } from "framer-motion";

const ErrorState: React.FC<{ message?: string }> = ({
  message = "An error occurred.",
}) => (
  <Paper
    component={motion.div}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    elevation={0}
    sx={{
      display: "grid",
      placeItems: "center",
      py: 6,
      px: 4,
      borderRadius: 1,
      border: (t) => `1px solid ${t.palette.divider}`,
      background: (t) =>
        t.palette.mode === "light"
          ? "linear-gradient(135deg, #fafafa, #f0f0f0)"
          : "linear-gradient(135deg, #1e1e1e, #2a2a2a)",
      boxShadow: (t) =>
        t.palette.mode === "light"
          ? "0 8px 24px rgba(0,0,0,0.08)"
          : "0 8px 24px rgba(0,0,0,0.6)",
      textAlign: "center",
      maxWidth: 400,
      margin: "0 auto",
    }}
  >
    <ErrorOutlineIcon
      sx={{
        fontSize: 48,
        mb: 2,
        color: (t) =>
          t.palette.mode === "light"
            ? t.palette.error.main
            : t.palette.error.light,
        opacity: 0.9,
      }}
    />

    <Typography
      variant="h6"
      sx={{
        fontWeight: 700,
        mb: 1,
        color: "text.primary",
      }}
    >
      {message}
    </Typography>

    <Typography
      variant="body2"
      sx={{
        color: "text.secondary",
        maxWidth: 300,
      }}
    >
      Please try again or refresh the page.
    </Typography>
  </Paper>
);

export default ErrorState;
