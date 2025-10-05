import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import ThemeToggle from "@components/theme/ThemeToggle";
import LanguageToggle from "@components/inputs/LanguageToggle";
import { useTranslation } from "react-i18next";
import { useAuth } from "@features/auth/AuthProvider";

const TopBar: React.FC = () => {
  const { t } = useTranslation("common");
  const { user, logout } = useAuth();

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        backdropFilter: "saturate(1.4) blur(10px)",
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">{t("appName")}</Typography>

        <Stack direction="row" spacing={1.5} alignItems="center">
          <LanguageToggle />
          <ThemeToggle />
          {user && (
            <Button
              color="inherit"
              onClick={logout}
              sx={{ textTransform: "none" }}
            >
              {t("logout")}
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
