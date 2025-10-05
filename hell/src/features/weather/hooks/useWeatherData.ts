import { useEffect, useState } from "react";
import { http } from "@lib/http";

export function useWeatherData(
  city = "San Francisco",
  units = "metric",
  lang = "en"
) {
  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    Promise.all([
      http.get(`/weather`, { params: { q: city, units, lang } }),
      http.get(`/forecast`, { params: { q: city, units, lang } }),
    ])
      .then(([w, f]) => {
        if (!mounted) return;
        setWeather(w.data);
        setForecast(f.data);
        setError(null);
      })
      .catch((e) => {
        if (!mounted) return;
        setError(e?.message ?? "Failed to fetch weather");
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, [city, units, lang]);

  return { weather, forecast, loading, error };
}
