import React from "react";
import { Paper, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ForecastResponse } from "../api";
import dayjs from "dayjs";

const TemperatureChart: React.FC<{ forecast: ForecastResponse }> = ({
  forecast,
}) => {
  const daily = forecast.list
    .filter((_, i) => i % 8 === 0)
    .slice(0, 7)
    .map((f) => ({
      day: dayjs.unix(f.dt).format("ddd"),
      temp: Math.round(f.main.temp),
    }));

  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 3,
        transition: "all 0.3s ease",
        "&:hover": { transform: "translateY(-4px)", boxShadow: 6 },
      }}
    >
      <Typography variant="h6" gutterBottom>
        Average Weekly Temperature
      </Typography>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={daily}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#1976d2"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default TemperatureChart;
