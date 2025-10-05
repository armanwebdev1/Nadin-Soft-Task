import type { ThemeOptions } from "@mui/material/styles";

export const typography: ThemeOptions["typography"] = {
  fontFamily: `'Inter', 'IRANSans', system-ui, -apple-system, Segoe UI, Roboto, Arial, 'Noto Sans', sans-serif`,
  h1: { fontWeight: 700, letterSpacing: "-0.02em" },
  h2: { fontWeight: 700, letterSpacing: "-0.02em" },
  h3: { fontWeight: 600, letterSpacing: "-0.01em" },
  subtitle1: { fontWeight: 500 },
  body1: { fontWeight: 400, lineHeight: 1.6 },
};
