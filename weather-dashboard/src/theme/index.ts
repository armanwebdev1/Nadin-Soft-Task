import { createTheme } from "@mui/material/styles";
import { buildPalette } from "./palette";

export type ColorMode = "light" | "dark";

export const buildTheme = (
  mode: ColorMode,
  direction: "ltr" | "rtl",
  lang: "en" | "fa"
) =>
  createTheme({
    direction,
    palette: buildPalette(mode),
    shape: { borderRadius: 16 },
    typography: {
      fontFamily:
        lang === "fa"
          ? `'IRANSans', 'Vazirmatn', system-ui, sans-serif`
          : `'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, 'Noto Sans', sans-serif`,
      h2: { fontSize: "3rem", fontWeight: 700 },
      h6: { fontWeight: 600 },
      body2: { color: "inherit" },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
          },
        },
      },
    },
  });
