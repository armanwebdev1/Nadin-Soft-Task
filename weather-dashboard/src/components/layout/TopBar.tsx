import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ThemeToggle from "../../components/theme/ThemeToggle";
import LanguageToggle from "../../components/inputs/LanguageToggle";
import { useTranslation } from "react-i18next";

const TopBar: React.FC = () => {
  const { t } = useTranslation("common");
  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        backdropFilter: "saturate(1.4) blur(10px)",
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">{t("appName")}</Typography>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <LanguageToggle />
          <ThemeToggle />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default TopBar;
