import type React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SettingsMenu from "./SettingsMenu";

import { useTranslation } from "react-i18next";
import { useAuth } from "@features/auth/AuthProvider";
import { useCity } from "@features/weather/CityContext";

const TopBar: React.FC = () => {
  const { t } = useTranslation("common");
  const { user } = useAuth();
  const { city, setCity } = useCity();

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        backdropFilter: "saturate(1.4) blur(10px)",
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
          gap: { xs: 1, sm: 2 },
          minHeight: { xs: 64, sm: 72, md: 75 },
          px: { xs: 1.5, sm: 2, md: 3 },
        })}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {t("appName")}
        </Typography>

        <Stack
          direction="row"
          spacing={{ xs: 0.5, sm: 1, md: 1.5 }}
          alignItems="center"
          sx={{
            flex: { xs: 1, sm: "initial" },
            justifyContent: "flex-end",
            minWidth: 0,
          }}
        >
          <FormControl
            size="small"
            sx={{
              minWidth: { xs: 140, sm: 200, md: 300 },
              maxWidth: { xs: "100%", sm: 300 },
            }}
          >
            <InputLabel>{t("searchPlace")}</InputLabel>
            <Select
              value={city}
              label={t("searchPlace")}
              onChange={(e) => setCity(e.target.value)}
              sx={{
                borderRadius: 0.25,
                fontSize: { xs: "0.875rem", sm: "1rem" },
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? "rgba(255,255,255,0.6)"
                    : "rgba(0,0,0,0.4)",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: (theme) => theme.palette.divider,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: (theme) => theme.palette.primary.light,
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: (theme) => theme.palette.primary.main,
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    borderRadius: 0.5,
                  },
                },
              }}
            >
              <MenuItem value="San Francisco">
                {t("cities.sanFrancisco")}
              </MenuItem>
              <MenuItem value="Tehran">{t("cities.tehran")}</MenuItem>
            </Select>
          </FormControl>

          {user && <SettingsMenu />}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
