# Weather Dashboard

یک برنامه آب و هوا ساخته شده با React, TypeScript, Framer Motion, و MUI که وضغیت آب و هوا و پیش بینی 5 روزه ارائه میدهد.

---

## ویژگی‌ها

- چندزبانه (i18n)
  پشتیبانی از انگلیسی و فارسی (RTL) با dayjs + jalaliday برای تاریخ جلالی.

- نمایش داده‌ها

  - وضعیت فعلی آب‌وهوا
  - پیش‌بینی ۵ روزه
  - نموداری دمای روزانه

- بهینه‌سازی عملکرد

  - بارگذاری سریع
  - مدیریت خطا و لودرهای سفارشی

- معماری ماژولار
  - `WeatherCard`
  - `ForecastList`
  - `TemperatureChart`
  - `ErrorState` و `LoadingState`

---

### 1. کلون کردن پروژه

```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```

### 2. نصب Dependencies

npm install

# یا

yarn install

### 3. تنظیم Local Variables

VITE_OPEN_WEATHER_API_KEY=api_key

### 4. اجرای پروژه

npm run dev
