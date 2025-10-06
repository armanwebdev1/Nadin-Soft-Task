import type React from "react";
import { Paper, Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import "dayjs/locale/fa";
import "dayjs/locale/en";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import SunnyRainIcon from "../../../assets/icons/sunny-rain.png";
import SunnyClearIcon from "../../../assets/icons/sunny-clear.png";
import CloudsIcon from "../../../assets/icons/clouds.png";
import DrizzleIcon from "../../../assets/icons/drizzle.png";
import SnowIcon from "../../../assets/icons/snow.png";
import FoggyNightIcon from "../../../assets/icons/foggy-night.png";
import WindyIcon from "../../../assets/icons/sunny-windy.png";

dayjs.extend(jalaliday);

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
  Clear: SunnyClearIcon,
  Clouds: CloudsIcon,
  Rain: SunnyRainIcon,
  Drizzle: DrizzleIcon,
  Snow: SnowIcon,
  Mist: FoggyNightIcon,
  Fog: FoggyNightIcon,
  Wind: WindyIcon,
};

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  const { t, i18n } = useTranslation(["common", "weather"]);

  dayjs.locale(i18n.language === "fa" ? "fa" : "en");

  const condition = weather.weather[0]?.main ?? "Clear";
  const descriptionKey = condition.toLowerCase();
  const localizedDescription = t(`weather:${descriptionKey}`);

  const cityMap: Record<string, string> = {
    "San Francisco": "sanFrancisco",
    Tehran: "tehran",
  };

  const cityKey = cityMap[weather.name] ?? weather.name;
  const localizedCity = t(`common:cities.${cityKey}`, weather.name);

  const baseDate = dayjs.unix(weather.dt);

  let dayName: string;
  let dateStr: string;
  let timeStr: string;

  if (i18n.language === "fa") {
    dayName = baseDate.locale("fa").calendar("jalali").format("dddd");
    dateStr = baseDate.locale("fa").calendar("jalali").format("DD MMMM YYYY");
    timeStr = baseDate.locale("fa").format("HH:mm");
  } else {
    dayName = baseDate.locale("en").format("dddd");
    dateStr = baseDate.locale("en").format("DD MMM, YYYY");
    timeStr = baseDate.locale("en").format("hh:mm A");
  }

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
      whileHover={{ y: -6, boxShadow: "0 12px 28px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.98 }}
      elevation={0}
      sx={{
        p: 4,
        borderRadius: 1.5,
        border: (t) => `1px solid ${t.palette.divider}`,
        backdropFilter: "saturate(1.25) blur(8px)",
        height: "100%",
        display: "flex",
        backgroundColor: (t) =>
          t.palette.mode === "light"
            ? t.palette.grey[200]
            : t.palette.grey[900],
      }}
    >
      <Box
        component={motion.div}
        variants={containerVariants}
        sx={{
          flex: 1,
          pr: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            bgcolor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[300]
                : t.palette.grey[800],
            width: "fit-content",
            mb: 1,
          }}
        >
          <LocationOnIcon
            fontSize="small"
            color="text.secondary"
            sx={{ opacity: 0.8 }}
          />
          <Typography
            variant="subtitle1"
            color="text.primary"
            sx={{ fontWeight: 600 }}
          >
            {localizedCity}
          </Typography>
        </Box>
        <Typography
          component={motion.p}
          variants={itemVariants}
          variant="h4"
          sx={{ fontWeight: 700 }}
        >
          {dayName}
        </Typography>
        <Typography
          component={motion.p}
          variants={itemVariants}
          variant="body2"
          color="text.secondary"
        >
          {dateStr} • {timeStr}
        </Typography>

        <Typography
          component={motion.p}
          variants={itemVariants}
          variant="h2"
          sx={{ fontWeight: 700, lineHeight: 1, mt: 2 }}
        >
          {Math.round(weather.main.temp)}°C
        </Typography>
        <Typography
          component={motion.p}
          variants={itemVariants}
          variant="body2"
          color="text.secondary"
        >
          {t("weather:high")}: {Math.round(weather.main.temp_max)} •{" "}
          {t("weather:low")}: {Math.round(weather.main.temp_min)}
        </Typography>
      </Box>

      <Box
        component={motion.div}
        variants={containerVariants}
        sx={{
          flexBasis: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component={motion.img}
          variants={itemVariants}
          src={iconMap[condition] ?? SunnyRainIcon}
          alt={localizedDescription}
          whileHover={{ scale: 1.1, rotate: 3 }}
          sx={{ width: 96, height: 96, mb: 1 }}
        />
        <Typography
          component={motion.p}
          variants={itemVariants}
          variant="h5"
          sx={{ textTransform: "capitalize" }}
        >
          {localizedDescription}
        </Typography>
        <Typography
          component={motion.p}
          variants={itemVariants}
          variant="body2"
          color="text.secondary"
        >
          {t("weather:feelsLike")} {Math.round(weather.main.feels_like)}°C
        </Typography>
      </Box>
    </Paper>
  );
};

export default WeatherCard;
