import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import TemperatureChart from "./components/TemperatureChart";
import { useWeatherData } from "./hooks/useWeatherData";
import LoadingState from "@components/feedback/LoadingState";
import ErrorState from "@components/feedback/ErrorState";

const DashboardPage: React.FC = () => {
  const { weather, forecast, loading, error } = useWeatherData();

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message="Unable to load weather data." />;

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <WeatherCard weather={weather} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <ForecastList forecast={forecast} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <TemperatureChart forecast={forecast} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardPage;
