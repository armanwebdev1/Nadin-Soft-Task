import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

interface LanguageToggleProps {
  variant?: "toggle" | "dropdown";
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({
  variant = "toggle",
}) => {
  const { i18n } = useTranslation("common");

  const handleChange = (lang: "en" | "fa") => {
    i18n.changeLanguage(lang);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {variant === "dropdown" ? (
        <Box sx={{ minWidth: 200, textAlign: "center" }}>
          <Select
            value={i18n.language}
            onChange={(e) => handleChange(e.target.value as "en" | "fa")}
            variant="standard"
            disableUnderline={false}
            IconComponent={(props) => (
              <span
                {...props}
                style={{ fontSize: "0.9rem", marginLeft: "auto" }}
              >
                ▼
              </span>
            )}
            sx={{
              minWidth: 200,
              fontWeight: 600,
              fontSize: "1rem",
              display: "flex",
              justifyContent: "space-between",
              "& .MuiSelect-select": {
                flex: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 1,
                py: 0.8,
              },
              "&:before": {
                borderBottom: "2px solid rgba(0,0,0,0.3)",
              },
              "&:after": {
                borderBottom: "2px solid #1976d2",
              },
              "&:hover:not(.Mui-disabled):before": {
                borderBottom: "2px solid #42a5f5",
              },
            }}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="fa">فارسی</MenuItem>
          </Select>
        </Box>
      ) : (
        <ToggleButtonGroup
          value={i18n.language}
          exclusive
          onChange={(_, val) => val && handleChange(val)}
        >
          <ToggleButton value="en">EN</ToggleButton>
          <ToggleButton value="fa">فا</ToggleButton>
        </ToggleButtonGroup>
      )}
    </motion.div>
  );
};

export default LanguageToggle;
