import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    common: {
      appName: "Weather",
      searchPlace: "Search your location",
      logout: "Exit",
      theme: "Mode",
      light: "Light",
      dark: "Dark",
      language: "Language",
      en: "En",
      fa: "Fa",
    },
    auth: {
      login: "Login",
      enterName: "Enter Your Name",
    },
    weather: {
      feelsLike: "Feels Like",
      avgMonthlyTemp: "Average Monthly Temperature",
      twoWeeksForecast: "Two weeks Forecast",
      high: "High",
      low: "Low",
      cloudy: "Cloudy",
    },
  },
  fa: {
    common: {
      appName: "آب و هوا",
      searchPlace: "مکان مورد نظر را جستجو کنید",
      logout: "خروج",
      theme: "حالت",
      light: "روشن",
      dark: "تاریک",
      language: "زبان",
      en: "انگ",
      fa: "فا",
    },
    auth: {
      login: "ورود",
      enterName: "نام خود را وارد کنید",
    },
    weather: {
      feelsLike: "احساس می‌شود",
      avgMonthlyTemp: "میانگین دمای ماهانه",
      twoWeeksForecast: "پیش‌بینی دو هفته‌ای",
      high: "بیشینه",
      low: "کمینه",
      cloudy: "ابری",
      searchPlace: "جستجوی شهر",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: "en",
  ns: ["common", "auth", "weather"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

export default i18n;
