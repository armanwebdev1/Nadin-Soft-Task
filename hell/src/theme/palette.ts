import { PaletteMode } from "@mui/material";

export const buildPalette = (mode: PaletteMode) => {
  if (mode === "dark") {
    return {
      mode,
      primary: { main: "#3B82F6" },
      secondary: { main: "#8B5CF6" },
      background: { default: "#0f172a", paper: "#111827" },
      divider: "rgba(255,255,255,0.08)",
      text: { primary: "#e5e7eb", secondary: "#94a3b8" },
    };
  }
  return {
    mode,
    primary: { main: "#2563EB" },
    secondary: { main: "#7C3AED" },
    background: { default: "#f8fafc", paper: "#ffffff" },
    divider: "rgba(0,0,0,0.08)",
    text: { primary: "#0f172a", secondary: "#64748b" },
  };
};
