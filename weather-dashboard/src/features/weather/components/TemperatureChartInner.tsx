import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import dayjs from "dayjs";

const TemperatureChartInner: React.FC<{ forecast: any }> = ({ forecast }) => {
  const monthly = forecast.list
    .filter((_: any, i: number) => i % 8 === 0)
    .slice(0, 12)
    .map((f: any) => ({
      day: dayjs.unix(f.dt).format("ddd"),
      temp: Math.round(f.main.temp),
    }));

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        data={monthly}
        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.9} />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0.5} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="label" tick={{ fill: "#64748b" }} />
        <YAxis tick={{ fill: "#64748b" }} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="temp"
          stroke="url(#colorTemp)"
          strokeWidth={4}
          dot={{ r: 5, fill: "#fff", strokeWidth: 2, stroke: "#3B82F6" }}
          activeDot={{ r: 7 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TemperatureChartInner;
