import { useEffect, useState } from "react";
import {
  fetchCurrentWeather,
  fetchForecast,
  WeatherResponse,
  ForecastResponse,
} from "./api";

export function useWeather(city: string, lang: string) {
  const [current, setCurrent] = useState<WeatherResponse | null>(null);
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    Promise.all([fetchCurrentWeather(city, lang), fetchForecast(city, lang)])
      .then(([c, f]) => {
        if (mounted) {
          setCurrent(c);
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
  }, [city, lang]);

  return { current, forecast, loading, error };
}
