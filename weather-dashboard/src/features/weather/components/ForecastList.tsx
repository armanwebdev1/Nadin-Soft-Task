import React from "react";
import { Paper, Stack, Typography, Divider, Box } from "@mui/material";
import { motion } from "framer-motion";
import dayjs from "dayjs";

type ForecastListProps = {
  forecast: {
    list: {
      dt: number;
      main: { temp: number };
      weather: { main: string; description: string }[];
    }[];
  };
};

const ForecastRow: React.FC<{
  day: string;
  temp: number;
  description: string;
}> = ({ day, temp, description }) => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25 }}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      py: 1.25,
    }}
  >
    <Typography variant="body1">{day}</Typography>
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textTransform: "capitalize" }}
      >
        {description}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        {Math.round(temp)}° C
      </Typography>
    </Stack>
  </Box>
);

const ForecastList: React.FC<ForecastListProps> = ({ forecast }) => {
  const days = forecast.list
    .filter((_, i) => i % 8 === 0)
    .slice(0, 10)
    .map((f) => ({
      day: dayjs.unix(f.dt).format("ddd"),
      temp: f.main.temp,
      description: f.weather[0]?.description ?? "",
    }));

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: (t) => `1px solid ${t.palette.divider}`,
        backdropFilter: "saturate(1.25) blur(8px)",
      }}
    >
      <Typography variant="h6" gutterBottom>
        2 weeks forecast
      </Typography>
      <Stack divider={<Divider />} spacing={0}>
        {days.map((d, i) => (
          <ForecastRow
            key={`${d.day}-${i}`}
            day={d.day}
            temp={d.temp}
            description={d.description}
          />
        ))}
      </Stack>
    </Paper>
  );
};

export default ForecastList;
