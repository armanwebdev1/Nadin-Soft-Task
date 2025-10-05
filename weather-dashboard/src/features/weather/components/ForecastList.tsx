import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { motion } from "framer-motion";
import { ForecastResponse } from "../api";
import dayjs from "dayjs";

const ForecastList: React.FC<{ forecast: ForecastResponse }> = ({
  forecast,
}) => {
  const daily = forecast.list.filter((_, i) => i % 8 === 0).slice(0, 7);

  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 3,
        transition: "all 0.3s ease",
        "&:hover": { transform: "translateY(-4px)", boxShadow: 6 },
      }}
    >
      <Stack spacing={2}>
        {daily.map((f, i) => (
          <motion.div
            key={f.dt}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Stack direction="row" justifyContent="space-between">
              <Typography>{dayjs.unix(f.dt).format("ddd")}</Typography>
              <Typography fontWeight={600}>
                {Math.round(f.main.temp)}°C
              </Typography>
            </Stack>
            {i < daily.length - 1 && <Divider />}
          </motion.div>
        ))}
      </Stack>
    </Paper>
  );
};

export default ForecastList;
