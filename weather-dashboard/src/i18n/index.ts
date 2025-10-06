import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    common: {
      appName: "Weather Dashboard",
      searchPlace: "Search your location",
      searchCity: "Search city...",
      logout: "Exit",
      theme: "Mode",
      light: "Light",
      dark: "Dark",
      language: "Language",
      en: "En",
      fa: "Fa",
      loading: "Loading…",
      cities: {
        sanFrancisco: "San Francisco",
        tehran: "Tehran",
      },
    },
    auth: {
      login: "Login",
      enterName: "Enter Your Name",
    },
    weather: {
      clear: "Clear",
      clouds: "Cloudy",
      rain: "Rain",
      drizzle: "Drizzle",
      snow: "Snow",
      thunderstorm: "Thunderstorm",
      mist: "Mist",
      fog: "Fog",
      wind: "Windy",
      feelsLike: "Feels Like",
      high: "High",
      low: "Low",
      avgDailyTemp: "Average Daily Temperature",
      fiveDaysForecast: "5 Days Forecast",
      cloudy: "Cloudy",
      loadingChart: "Loading chart...",
    },
    error: {
      defaultMessage: "An error occurred.",
      suggestion: "Please try again or refresh the page.",
    },
  },
  fa: {
    common: {
      appName: "داشبورد آب و هوا",
      searchPlace: "مکان مورد نظر را جستجو کنید",
      searchCity: "جستجوی شهر...",
      logout: "خروج",
      theme: "حالت",
      light: "روشن",
      dark: "تاریک",
      language: "زبان",
      en: "انگلیسی",
      fa: "فارسی",
      loading: "در حال بارگذاری…",
      cities: {
        sanFrancisco: "سن فرنسیسکو",
        tehran: "تهران",
      },
    },
    auth: {
      login: "ورود",
      enterName: "نام خود را وارد کنید",
    },
    weather: {
      feelsLike: "احساس می‌شود",
      avgDailyTemp: "میانگین دمای روزانه",
      fiveDaysForecast: "پیش‌بینی پنج روزه",
      high: "بیشینه",
      low: "کمینه",
      cloudy: "ابری",
      searchPlace: "جستجوی شهر",
      clear: "صاف",
      clouds: "ابری",
      rain: "بارانی",
      drizzle: "نم‌نم باران",
      snow: "برفی",
      thunderstorm: "رعد و برق",
      mist: "مه",
      fog: "مه غلیظ",
      wind: "بادی",
      loadingChart: "در حال بارگذاری نمودار...",
    },
    error: {
      defaultMessage: "خطایی رخ داده است.",
      suggestion: "لطفاً دوباره تلاش کنید یا صفحه را بازنشانی کنید.",
    },
  },
};

const LANGUAGE_STORAGE_KEY = "weather-app-language";

const getSavedLanguage = (): string => {
  if (typeof window !== "undefined" && window.localStorage) {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en";
  }
  return "en";
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: getSavedLanguage(),
  ns: ["common", "auth", "weather"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lng);
  }
});

export default i18n;
