import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import LightModeRounded from "@mui/icons-material/LightModeRounded";
import DarkModeRounded from "@mui/icons-material/DarkModeRounded";
import { useThemeCtx } from "../../providers/ThemeProvider";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ThemeToggle: React.FC = () => {
  const { mode, setMode } = useThemeCtx();
  const { t } = useTranslation("common");

  const isLight = mode === "light";
  const next = isLight ? "dark" : "light";

  return (
    <Tooltip title={`${t("theme")}: ${t(isLight ? "light" : "dark")}`}>
      <motion.div
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        style={{ display: "inline-block" }}
      >
        <IconButton
          color="primary"
          onClick={() => setMode(next)}
          aria-label="toggle theme"
        >
          {isLight ? <LightModeRounded /> : <DarkModeRounded />}
        </IconButton>
      </motion.div>
    </Tooltip>
  );
};
export default ThemeToggle;
