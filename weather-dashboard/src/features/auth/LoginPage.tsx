import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { useAuth } from "./AuthProvider";
import LanguageToggle from "@components/inputs/LanguageToggle";
import ThemeToggle from "@components/theme/ThemeToggle";
import loginLight from "../../assets/login-image-light.png";
import loginDark from "../../assets/login-image-dark.png";

const LoginPage: React.FC = () => {
  const { t } = useTranslation("auth");
  const { login } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();

  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError(t("enterName"));
      return;
    }
    login(name.trim());
    navigate("/");
  };

  return (
    <Box
      component={motion.div}
      animate={{
        background: [
          theme.palette.mode === "light"
            ? "linear-gradient(135deg, #fdfefe, #f5fbff, #eaf6ff)"
            : "linear-gradient(135deg, #0d1117, #161b22, #1e242c)",
          theme.palette.mode === "light"
            ? "linear-gradient(135deg, #f5fbff, #eaf6ff, #fdfefe)"
            : "linear-gradient(135deg, #161b22, #1e242c, #0d1117)",
        ],
      }}
      transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: { xs: 2, sm: 3 },
        bgcolor: "transparent",
      }}
    >
      <Paper
        elevation={3}
        component={motion.div}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: { xs: "95%", sm: "90%", md: 1000 },
          borderRadius: { xs: 1.5, sm: 2 },
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[6],
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: "left",
            p: { xs: 2.5, sm: 3.5, md: 5, lg: 6 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: { xs: 1.5, sm: 2 },
            minWidth: 0,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: theme.palette.text.primary,
                mb: 1.5,
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
              }}
            >
              {t("login")}
            </Typography>
          </motion.div>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            aria-label="login form"
          >
            <Stack spacing={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <TextField
                  label={t("enterName")}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setError("");
                  }}
                  error={!!error}
                  helperText={error}
                  fullWidth
                  variant="outlined"
                  inputProps={{ "aria-label": t("enterName") }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                      backgroundColor: theme.palette.background.default,
                      input: { color: theme.palette.text.primary },
                      "& fieldset": { borderColor: theme.palette.divider },
                      "&:hover fieldset": {
                        borderColor: theme.palette.primary.light,
                        transition: "border-color 0.3s ease",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: theme.palette.text.secondary,
                    },
                    "& .MuiFormHelperText-root": {
                      color: theme.palette.error.main,
                    },
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  component={motion.button}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    borderRadius: 1,
                    py: { xs: 1.25, sm: 1.5 },
                    fontWeight: 600,
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    background: `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                    textTransform: "none",
                  }}
                >
                  {t("login")}
                </Button>
              </motion.div>
            </Stack>
          </Box>
        </Box>

        <Box
          component={motion.img}
          src={theme.palette.mode === "light" ? loginLight : loginDark}
          alt="Login illustration"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          sx={{
            display: { xs: "none", md: "block" },
            flex: "0 0 45%",
            maxWidth: { md: 400, lg: 500 },
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderTopRightRadius: { md: 12 },
            borderBottomRightRadius: { md: 12 },
          }}
        />
      </Paper>

      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "95%", sm: "90%", md: 1000 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 1.5, sm: 2 },
          mt: { xs: 3, sm: 3, md: 3 },
          px: { xs: 1, sm: 2, md: 0 },
          flexWrap: "wrap",
        }}
      >
        <LanguageToggle variant="dropdown" />
        <ThemeToggle />
      </Box>
    </Box>
  );
};

export default LoginPage;
