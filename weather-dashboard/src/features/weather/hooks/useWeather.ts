import { useEffect, useState } from "react";
import {
  fetchCurrentWeather,
  fetchForecast,
  type WeatherResponse,
  type ForecastResponse,
} from "../api";

export function useWeather(
  city = "San Francisco",
  lang = "en",
  units = "metric"
) {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    Promise.all([
      fetchCurrentWeather(city, lang, units),
      fetchForecast(city, lang, units),
    ])
      .then(([w, f]) => {
        if (mounted) {
          setWeather(w);
          setForecast(f);
        }
      })
      .catch((err) => {
        if (mounted) setError(err.message || "Failed to fetch weather");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [city, lang, units]);

  return { weather, forecast, loading, error };
}
