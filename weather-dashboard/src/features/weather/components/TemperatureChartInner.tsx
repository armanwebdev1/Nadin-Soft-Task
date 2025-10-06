import type React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import "dayjs/locale/fa";
import "dayjs/locale/en";
import { useTranslation } from "react-i18next";

dayjs.extend(jalaliday);

const TemperatureChartInner: React.FC<{ forecast: any }> = ({ forecast }) => {
  const { i18n } = useTranslation();

  const daily = forecast.list
    .filter((_: any, i: number) => i % 8 === 0)
    .map((f: any) => {
      const baseDate = dayjs.unix(f.dt);

      let dateLabel: string;
      if (i18n.language === "fa") {
        dateLabel = baseDate
          .locale("fa")
          .calendar("jalali")
          .format("ddd DD MMM");
      } else {
        dateLabel = baseDate.locale("en").format("ddd, DD MMM");
      }

      return {
        date: dateLabel,
        temp: Math.round(f.main.temp),
      };
    });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={daily}
        margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorTemp" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.9} />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0.9} />
          </linearGradient>

          <linearGradient id="fillTemp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.25} />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#94a3b8", fontSize: 12 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#94a3b8", fontSize: 12, dx: -40 }}
        />

        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(30, 41, 59, 0.9)",
            borderRadius: 12,
            border: "none",
            color: "#fff",
            fontSize: 13,
            padding: "8px 12px",
          }}
          labelStyle={{ color: "#cbd5e1", marginBottom: 4 }}
        />

        <Line
          type="monotone"
          dataKey="temp"
          stroke="url(#colorTemp)"
          strokeWidth={4}
          dot={{
            r: 5,
            fill: "#fff",
            strokeWidth: 2,
            stroke: "#3B82F6",
          }}
          activeDot={{
            r: 7,
            stroke: "#8B5CF6",
            strokeWidth: 2,
            fill: "#fff",
          }}
          fill="url(#fillTemp)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TemperatureChartInner;
