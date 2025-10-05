import { createTheme } from "@mui/material/styles";
import { buildPalette } from "./palette";

export const buildTheme = (mode: "light" | "dark", direction: "ltr" | "rtl") =>
  createTheme({
    direction,
    palette: buildPalette(mode),
    shape: { borderRadius: 16 },
    typography: {
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
