import { createTheme } from "@mui/material/styles";
import { darkPalette, lightPalette } from "./palette";
import { typography } from "./typography";

export type ColorMode = "light" | "dark";
export const buildTheme = (mode: ColorMode, direction: "ltr" | "rtl") =>
  createTheme({
    palette: mode === "light" ? lightPalette : darkPalette,
    typography,
    shape: { borderRadius: 14 },
    direction,
    components: {
      MuiButton: {
        styleOverrides: {
          root: { textTransform: "none", borderRadius: 12 },
        },
      },
      MuiPaper: {
        defaultProps: { elevation: 0 },
      },
      MuiCard: {
        styleOverrides: {
          root: { backdropFilter: "saturate(1.2) blur(8px)" },
        },
      },
    },
  });
