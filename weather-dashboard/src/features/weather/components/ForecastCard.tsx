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
      minWidth: { xs: 110, sm: 120, md: 130 },
      maxWidth: { xs: 130, sm: 140, md: 150 },
      minHeight: { xs: 220, sm: 240, md: 260 },
      flex: "0 0 auto",
      py: { xs: 3, sm: 3.5, md: 4 },
      px: { xs: 1.5, sm: 2, md: 2.5 },
      borderRadius: 1.5,
      border: (t) => `1px solid ${t.palette.divider}`,
      backgroundColor: (t) =>
        t.palette.mode === "light" ? t.palette.grey[300] : t.palette.grey[800],
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      gap: { xs: 1.5, sm: 2 },
      cursor: "pointer",
      transition: "all 0.25s ease-in-out",
      "&:hover": {
        boxShadow: (t) => t.shadows[4],
        borderColor: "primary.main",
        transform: "translateY(-4px)",
      },
      "&:active": {
        transform: "scale(0.98)",
      },
    }}
  >
    <Typography
      variant="subtitle1"
      sx={{
        fontWeight: 600,
        color: "text.primary",
        fontSize: { xs: "0.9rem", sm: "1rem" },
      }}
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
        my: { xs: 0.5, sm: 1 },
      }}
    />

    <motion.img
      src={icon}
      alt={condition}
      style={{
        width: "clamp(56px, 15vw, 72px)",
        height: "clamp(56px, 15vw, 72px)",
        objectFit: "contain",
      }}
      whileHover={{
        scale: 1.1,
        rotate: 3,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
    />

    <Typography
      variant="body2"
      sx={{
        color: "text.secondary",
        fontSize: { xs: "0.75rem", sm: "0.875rem" },
        textAlign: "center",
      }}
    >
      {condition}
    </Typography>

    <Typography
      variant="h5"
      sx={{
        fontWeight: 700,
        color: "primary.main",
        fontSize: { xs: "1.25rem", sm: "1.35rem", md: "1.5rem" },
      }}
    >
      {Math.round(temp)}°C
    </Typography>
  </Box>
);

export default ForecastCard;
