import React from "react";
import { Paper, Box, Stack, Typography, Divider } from "@mui/material";
import dayjs from "dayjs";

import SunnyRainIcon from "@assets/icons/sunny-rain.png";
import NightRainIcon from "@assets/icons/night-rain.png";
import FoggyNightIcon from "@assets/icons/foggy-night.png";

type WeatherCardProps = {
  weather: {
    name: string;
    dt: number;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      feels_like: number;
    };
    weather: { main: string; description: string }[];
  };
};

const iconMap: Record<string, string> = {
  Rain: SunnyRainIcon,
  Drizzle: NightRainIcon,
  Clouds: FoggyNightIcon,
  Clear: SunnyRainIcon,
  Mist: FoggyNightIcon,
  Fog: FoggyNightIcon,
};

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  const condition = weather.weather[0]?.main ?? "Clear";
  const description = weather.weather[0]?.description ?? "—";
  const iconSrc = iconMap[condition] ?? SunnyRainIcon;

  const dateStr = dayjs.unix(weather.dt).format("dddd, DD MMM, YYYY");
  const timeStr = dayjs.unix(weather.dt).format("hh:mm A");

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
      <Stack spacing={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h6">{weather.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {dateStr} • {timeStr}
            </Typography>
          </Box>
          <Box
            component="img"
            src={iconSrc}
            alt={description}
            sx={{ width: 56, height: 56 }}
          />
        </Box>

        <Box>
          <Typography variant="h2" sx={{ fontWeight: 700, lineHeight: 1 }}>
            {Math.round(weather.main.temp)}° C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            High: {Math.round(weather.main.temp_max)} • Low:{" "}
            {Math.round(weather.main.temp_min)}
          </Typography>
        </Box>

        <Divider />

        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Feels like {Math.round(weather.main.feels_like)}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default WeatherCard;
