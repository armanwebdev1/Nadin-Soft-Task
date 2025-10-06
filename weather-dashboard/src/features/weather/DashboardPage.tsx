import type React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import TemperatureChart from "./components/TemperatureChart";
import { useWeather } from "./hooks/useWeather";
import LoadingState from "@components/feedback/LoadingState";
import ErrorState from "@components/feedback/ErrorState";
import { useCity } from "@features/weather/CityContext";
import { motion } from "framer-motion";

const DashboardPage: React.FC = () => {
  const { city } = useCity();
  const { weather, forecast, loading, error } = useWeather(city);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (!weather || !forecast)
    return <ErrorState message="No weather data available." />;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <Container maxWidth="xl">
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "2fr 3fr" },
          gridAutoRows: { xs: "auto", md: "minmax(260px, auto)" },
          gap: { xs: 2, sm: 2.5, md: 3, lg: 3 },
          mb: { xs: 3, md: 4 },
        }}
      >
        <Box
          component={motion.div}
          variants={cardVariants}
          sx={{
            gridColumn: { xs: "1", md: "1" },
            gridRow: "1",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <WeatherCard weather={weather} />
        </Box>

        <Box
          component={motion.div}
          variants={cardVariants}
          sx={{
            gridColumn: { xs: "1", md: "2" },
            gridRow: { xs: "3", md: "1" },
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <TemperatureChart forecast={forecast} />
        </Box>

        <Box
          component={motion.div}
          variants={cardVariants}
          sx={{
            gridColumn: { xs: "1", md: "1 / -1" },
            gridRow: { xs: "2", md: "2" },
            mt: { xs: 0, md: 1 },
          }}
        >
          <ForecastList forecast={forecast} />
        </Box>
      </Box>
    </Container>
  );
};

export default DashboardPage;
