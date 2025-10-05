import React from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const LanguageToggle: React.FC = () => {
  const { i18n, t } = useTranslation("common");

  const handleChange = (_: unknown, lang: "en" | "fa" | null) => {
    if (lang) i18n.changeLanguage(lang);
  };

  return (
    <motion.div layout>
      <ToggleButtonGroup
        value={i18n.language}
        exclusive
        onChange={(_, val) => val && i18n.changeLanguage(val)}
        component={motion.div}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <ToggleButton value="en">EN</ToggleButton>
        <ToggleButton value="fa">فا</ToggleButton>
      </ToggleButtonGroup>
    </motion.div>
  );
};
export default LanguageToggle;
