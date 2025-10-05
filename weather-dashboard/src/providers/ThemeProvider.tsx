import React, {
  createContext,
  useMemo,
  useState,
  useEffect,
  useContext,
} from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { buildTheme, ColorMode } from "../theme/index";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

type ThemeCtx = {
  mode: ColorMode;
  direction: "ltr" | "rtl";
  setMode: (m: ColorMode) => void;
  setDirection: (d: "ltr" | "rtl") => void;
};
const ThemeContext = createContext<ThemeCtx | null>(null);

export const useThemeCtx = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeCtx must be used within ThemeProvider");
  return ctx;
};

const LS_MODE = "wd:mode";
const LS_DIR = "wd:dir";

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [mode, setMode] = useState<ColorMode>("light");
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");

  useEffect(() => {
    const m = (localStorage.getItem(LS_MODE) as ColorMode) || "light";
    const d = (localStorage.getItem(LS_DIR) as "ltr" | "rtl") || "ltr";
    setMode(m);
    setDirection(d);
    document.dir = d;
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_MODE, mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem(LS_DIR, direction);
    document.dir = direction;
  }, [direction]);

  const theme = useMemo(() => buildTheme(mode, direction), [mode, direction]);

  const cache = useMemo(
    () =>
      createCache({
        key: direction === "rtl" ? "mui-rtl" : "mui",
        stylisPlugins: direction === "rtl" ? [prefixer, rtlPlugin] : [prefixer],
      }),
    [direction]
  );

  return (
    <ThemeContext.Provider value={{ mode, direction, setMode, setDirection }}>
      <CacheProvider value={cache}>
        <MUIThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MUIThemeProvider>
      </CacheProvider>
    </ThemeContext.Provider>
  );
};
