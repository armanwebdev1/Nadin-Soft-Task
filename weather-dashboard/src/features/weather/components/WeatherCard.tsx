import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";
import { WeatherResponse } from "../api";
import { useTranslation } from "react-i18next";

const WeatherCard: React.FC<{ data: WeatherResponse }> = ({ data }) => {
  const { t } = useTranslation("weather");
  const weather = data.weather[0];

  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      sx={{ p: 3, borderRadius: 3, textAlign: "center" }}
    >
      <Typography variant="h3" fontWeight={700}>
        {Math.round(data.main.temp)}°C
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {weather.description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {t("feelsLike")} {Math.round(data.main.feels_like)}°
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {t("high")}: {Math.round(data.main.temp_max)}° / {t("low")}:{" "}
        {Math.round(data.main.temp_min)}°
      </Typography>
    </Paper>
  );
};

export default WeatherCard;
