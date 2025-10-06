import type React from "react";
import { useRef } from "react";
import { Paper, Stack, Typography, Box, IconButton } from "@mui/material";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import "dayjs/locale/fa";
import "dayjs/locale/en";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ForecastCard from "./ForecastCard";

import SunnyRainIcon from "../../../assets/icons/sunny-rain.png";
import SunnyClearIcon from "../../../assets/icons/sunny-clear.png";
import CloudsIcon from "../../../assets/icons/clouds.png";
import SnowIcon from "../../../assets/icons/snow.png";
import FoggyNightIcon from "../../../assets/icons/foggy-night.png";
import DrizzleIcon from "../../../assets/icons/drizzle.png";

dayjs.extend(jalaliday);

type ForecastListProps = {
  forecast: {
    list: {
      dt: number;
      main: { temp: number };
      weather: { main: string; description: string }[];
    }[];
  };
};

const iconMap: Record<string, string> = {
  Rain: SunnyRainIcon,
  Drizzle: DrizzleIcon,
  Clouds: CloudsIcon,
  Clear: SunnyClearIcon,
  Mist: FoggyNightIcon,
  Fog: FoggyNightIcon,
  Snow: SnowIcon,
};

const ForecastList: React.FC<ForecastListProps> = ({ forecast }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation("weather");

  const days = forecast.list
    .filter((_, i) => i % 8 === 0)
    .slice(0, 10)
    .map((f) => {
      const condition = f.weather[0]?.main ?? "Clear";
      const descriptionKey = condition.toLowerCase();
      const localizedCondition = t(descriptionKey);

      const icon = iconMap[condition] ?? SunnyRainIcon;

      const baseDate = dayjs.unix(f.dt);
      let dayLabel: string;
      if (i18n.language === "fa") {
        dayLabel = baseDate.locale("fa").calendar("jalali").format("dddd");
      } else {
        dayLabel = baseDate.locale("en").format("ddd");
      }

      return {
        day: dayLabel,
        temp: f.main.temp,
        description: localizedCondition,
        icon,
      };
    });

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <Paper
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="show"
      whileHover={{ y: -4, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 1.5,
        border: (t) => `1px solid ${t.palette.divider}`,
        backdropFilter: "saturate(1.25) blur(8px)",
        backgroundColor: (t) =>
          t.palette.mode === "light"
            ? t.palette.grey[200]
            : t.palette.grey[900],
      }}
    >
      <Stack spacing={2}>
        <Box
          component={motion.div}
          variants={containerVariants}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography component={motion.p} variants={itemVariants} variant="h6">
            {t("fiveDaysForecast")}
          </Typography>
          <Stack direction="row" spacing={0.5}>
            <motion.div variants={itemVariants}>
              <IconButton
                size="small"
                onClick={() => scroll("left")}
                sx={{
                  bgcolor: "action.hover",
                  "&:hover": { bgcolor: "action.selected" },
                }}
              >
                <ChevronLeftIcon
                  fontSize="small"
                  sx={{ transform: "scaleX(1)" }}
                />
              </IconButton>
            </motion.div>
            <motion.div variants={itemVariants}>
              <IconButton
                size="small"
                onClick={() => scroll("right")}
                sx={{
                  bgcolor: "action.hover",
                  "&:hover": { bgcolor: "action.selected" },
                }}
              >
                <ChevronRightIcon
                  fontSize="small"
                  sx={{ transform: "scaleX(1)" }}
                />
              </IconButton>
            </motion.div>
          </Stack>
        </Box>

        <Box
          ref={scrollContainerRef}
          component={motion.div}
          variants={containerVariants}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            overflowY: "hidden",
            scrollbarWidth: "thin",
            scrollbarColor: (t) =>
              `${t.palette.action.selected} ${t.palette.background.paper}`,
            "&::-webkit-scrollbar": { height: 6 },
            "&::-webkit-scrollbar-track": {
              bgcolor: "background.paper",
              borderRadius: 1.5,
            },
            "&::-webkit-scrollbar-thumb": {
              bgcolor: "action.selected",
              borderRadius: 1.5,
              "&:hover": { bgcolor: "action.active" },
            },
            pb: 1,
          }}
        >
          {days.map((d, i) => (
            <motion.div
              key={`${d.day}-${i}`}
              variants={cardVariants}
              whileTap={{ scale: 0.97 }}
              style={{ borderRadius: "10px" }}
            >
              <ForecastCard
                day={d.day}
                temp={d.temp}
                condition={d.description}
                icon={d.icon}
              />
            </motion.div>
          ))}
        </Box>
      </Stack>
    </Paper>
  );
};

export default ForecastList;
