import type React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

type ForecastCardProps = {
  day: string;
  temp: number;
  condition: string;
  icon: string;
};

const ForecastCard: React.FC<ForecastCardProps> = ({
  day,
  temp,
  condition,
  icon,
}) => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    sx={{
      minWidth: { xs: 100, sm: 110 },
      maxWidth: { xs: 110, sm: 130 },
      minHeight: { xs: 200, sm: 240 },
      flex: "0 0 auto",
      py: 4,
      px: 2,
      borderRadius: 1.5,
      border: (t) => `1px solid ${t.palette.divider}`,
      backgroundColor: (t) =>
        t.palette.mode === "light" ? t.palette.grey[300] : t.palette.grey[800],
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 2,
      cursor: "pointer",
      transition: "all 0.25s ease-in-out",
      "&:hover": {
        boxShadow: (t) => t.shadows[4],
        borderColor: "primary.main",
      },
    }}
  >
    <Typography
      variant="subtitle1"
      sx={{ fontWeight: 600, color: "text.primary" }}
    >
      {day}
    </Typography>

    <Box
      sx={{
        width: "90%",
        height: 3,
        borderRadius: 1,
        background: (t) =>
          t.palette.mode === "light"
            ? "linear-gradient(to right, transparent, rgba(0,0,0,0.3), transparent)"
            : "linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)",
        my: 1,
      }}
    />

    <motion.img
      src={icon}
      alt={condition}
      style={{
        width: "64px",
        height: "64px",
        objectFit: "contain",
      }}
      whileHover={{
        scale: 1.1,
        rotate: 3,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
    />

    <Typography variant="body2" sx={{ color: "text.secondary" }}>
      {condition}
    </Typography>

    <Typography variant="h5" sx={{ fontWeight: 700, color: "primary.main" }}>
      {Math.round(temp)}°C
    </Typography>
  </Box>
);

export default ForecastCard;
