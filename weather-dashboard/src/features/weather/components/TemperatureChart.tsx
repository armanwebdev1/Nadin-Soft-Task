import type React from "react";
import { Suspense, lazy } from "react";
import { Paper, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ChartInner = lazy(() => import("./TemperatureChartInner"));

const TemperatureChart: React.FC<{ forecast: any }> = ({ forecast }) => {
  const { t } = useTranslation("weather");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <Paper
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="show"
      whileHover={{ y: -4, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.98 }}
      elevation={0}
      sx={{
        p: { xs: 2, sm: 2.5, md: 3 },
        borderRadius: 1.5,
        border: (t) => `1px solid ${t.palette.divider}`,
        backdropFilter: "saturate(1.25) blur(8px)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: (t) =>
          t.palette.mode === "light"
            ? t.palette.grey[200]
            : t.palette.grey[900],
      }}
    >
      <Typography
        component={motion.p}
        variants={itemVariants}
        variant="h6"
        gutterBottom
        sx={{ fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" } }}
      >
        {t("avgDailyTemp")}
      </Typography>

      <Box
        component={motion.div}
        variants={itemVariants}
        sx={{ flex: 1, minHeight: 0 }}
      >
        <Suspense fallback={<div>{t("loadingChart", "Loading chart...")}</div>}>
          <ChartInner forecast={forecast} />
        </Suspense>
      </Box>
    </Paper>
  );
};

export default TemperatureChart;
