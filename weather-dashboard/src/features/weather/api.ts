import { http } from "../../lib/http";
import { OPEN_WEATHER_API_KEY } from "../../utils/constants";

export type WeatherResponse = {
  name: string;
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
  };
  weather: { main: string; description: string; icon: string }[];
};

export type ForecastResponse = {
  list: {
    dt: number;
    main: { temp: number };
    weather: { main: string; description: string; icon: string }[];
  }[];
};

export async function fetchCurrentWeather(
  city: string,
  lang = "en",
  units = "metric"
) {
  const res = await http.get<WeatherResponse>("/weather", {
    params: { q: city, appid: OPEN_WEATHER_API_KEY, units, lang },
  });
  return res.data;
}

export async function fetchForecast(
  city: string,
  lang = "en",
  units = "metric"
) {
  const res = await http.get<ForecastResponse>("/forecast", {
    params: { q: city, appid: OPEN_WEATHER_API_KEY, units, lang },
  });
  return res.data;
}
