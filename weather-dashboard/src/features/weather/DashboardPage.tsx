import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { motion } from "framer-motion";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import TemperatureChart from "./components/TemperatureChart";
import LoadingState from "../../components/feedback/LoadingState";
import ErrorState from "../../components/feedback/ErrorState";
import { useWeather } from "./useWeather";
import { useTranslation } from "react-i18next";
import WeatherSkeleton from "../../components/feedback/WeatherSkeleton";

const DashboardPage: React.FC = () => {
  const { t, i18n } = useTranslation("weather");
  const [city, setCity] = useState("San Francisco");
  const { current, forecast, loading, error } = useWeather(city, i18n.language);

  return (
    <Stack
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      spacing={4}
    >
      <TextField
        label={t("searchPlace")}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        fullWidth
      />

      {loading && <LoadingState />}
      {error && <ErrorState message={error} onRetry={() => setCity(city)} />}

      {loading && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <WeatherSkeleton />
          </Grid>
          <Grid item xs={12} md={6}>
            <WeatherSkeleton />
          </Grid>
          <Grid item xs={12}>
            <WeatherSkeleton />
          </Grid>
        </Grid>
      )}

      {!loading && !error && current && forecast && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <WeatherCard data={current} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TemperatureChart forecast={forecast} />
          </Grid>
          <Grid item xs={12}>
            <ForecastList forecast={forecast} />
          </Grid>
        </Grid>
      )}
    </Stack>
  );
};

export default DashboardPage;
