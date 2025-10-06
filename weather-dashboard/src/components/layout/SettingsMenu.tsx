import type React from "react";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SettingsRounded from "@mui/icons-material/SettingsRounded";
import LightModeRounded from "@mui/icons-material/LightModeRounded";
import DarkModeRounded from "@mui/icons-material/DarkModeRounded";
import ExitToAppRounded from "@mui/icons-material/ExitToAppRounded";
import { useThemeCtx } from "@providers/ThemeProvider";
import { useTranslation } from "react-i18next";
import { useAuth } from "@features/auth/AuthProvider";

const SettingsMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { mode, setMode } = useThemeCtx();
  const { i18n, t } = useTranslation("common");
  const { logout } = useAuth();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (newMode: "light" | "dark") => {
    setMode(newMode);
  };

  const handleLanguageChange = (lang: "en" | "fa") => {
    i18n.changeLanguage(lang);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={(theme) => ({
          width: { xs: 32, sm: 36, md: 40 },
          height: { xs: 32, sm: 36, md: 40 },
          borderRadius: 0.25,
          border: `1px solid ${
            open ? theme.palette.primary.main : theme.palette.grey[300]
          }`,
          backgroundColor: open
            ? theme.palette.mode === "light"
              ? "rgba(33, 150, 243, 0.12)"
              : "rgba(33, 150, 243, 0.2)"
            : "transparent",
          color: open ? theme.palette.primary.main : theme.palette.grey[400],
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: open
              ? "rgba(33, 150, 243, 0.18)"
              : theme.palette.action.hover,
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
          },
        })}
        aria-label="settings"
      >
        <SettingsRounded />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 1.5,
              minWidth: 200,
              borderRadius: 0.5,
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            },
          },
        }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Box sx={{ mb: 2.5 }}>
            <Typography
              variant="body2"
              sx={{
                mb: 1,
                fontWeight: 500,
                color: "text.secondary",
              }}
            >
              {t("theme")}
            </Typography>
            <ButtonGroup
              fullWidth
              variant="outlined"
              sx={{
                "& .MuiButton-root": {
                  textTransform: "none",
                  py: 0.75,
                  borderColor: "divider",
                  color: "text.secondary",
                  borderRadius: 0,
                  "&.active": {
                    borderColor: "primary.main",
                    color: "primary.main",
                    backgroundColor: "transparent",
                    "&:hover": {
                      borderColor: "primary.dark",
                      color: "primary.dark",
                      backgroundColor: "transparent",
                    },
                  },
                },
                "& .MuiButton-root:first-of-type": {
                  borderTopLeftRadius: 6,
                  borderBottomLeftRadius: 6,
                },
                "& .MuiButton-root:last-of-type": {
                  borderTopRightRadius: 6,
                  borderBottomRightRadius: 6,
                },
              }}
            >
              <Button
                onClick={() => handleThemeChange("light")}
                className={mode === "light" ? "active" : ""}
                startIcon={<LightModeRounded fontSize="small" />}
              >
                {t("light")}
              </Button>
              <Button
                onClick={() => handleThemeChange("dark")}
                className={mode === "dark" ? "active" : ""}
                startIcon={<DarkModeRounded fontSize="small" />}
              >
                {t("dark")}
              </Button>
            </ButtonGroup>

            <Divider sx={{ my: 2 }} />
          </Box>

          <Box sx={{ mb: 2.5 }}>
            <Typography
              variant="body2"
              sx={{
                mb: 1,
                fontWeight: 500,
                color: "text.secondary",
              }}
            >
              {t("language")}
            </Typography>
            <ButtonGroup
              fullWidth
              variant="outlined"
              sx={{
                "& .MuiButton-root": {
                  textTransform: "none",
                  py: 0.75,
                  borderColor: "divider",
                  color: "text.secondary",
                  borderRadius: 0,
                  "&.active": {
                    borderColor: "primary.main",
                    color: "primary.main",
                    backgroundColor: "transparent",
                    "&:hover": {
                      borderColor: "primary.dark",
                      color: "primary.dark",
                      backgroundColor: "transparent",
                    },
                  },
                },
                "& .MuiButton-root:first-of-type": {
                  borderTopLeftRadius: 6,
                  borderBottomLeftRadius: 6,
                },
                "& .MuiButton-root:last-of-type": {
                  borderTopRightRadius: 6,
                  borderBottomRightRadius: 6,
                },
              }}
            >
              <Button
                onClick={() => handleLanguageChange("en")}
                className={i18n.language === "en" ? "active" : ""}
              >
                {t("en")}
              </Button>
              <Button
                onClick={() => handleLanguageChange("fa")}
                className={i18n.language === "fa" ? "active" : ""}
              >
                {t("fa")}
              </Button>
            </ButtonGroup>

            <Divider sx={{ my: 2 }} />
          </Box>

          <Button
            fullWidth
            variant="text"
            onClick={handleLogout}
            startIcon={<ExitToAppRounded />}
            sx={{
              textTransform: "none",
              justifyContent: "flex-start",
              color: "text.primary",
              borderRadius: 0.5,
              transition: "all 0.2s ease",
              "&:hover": {
                bgcolor: "action.hover",
              },
            }}
          >
            {t("logout")}
          </Button>
        </Box>
      </Menu>
    </>
  );
};

export default SettingsMenu;
