import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";
import { useAuth } from "./AuthProvider";

const LoginPage: React.FC = () => {
  const { t } = useTranslation("auth");
  const { login } = useAuth();
  const navigate = useNavigate();

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
    <Stack
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "70vh" }}
    >
      <Paper
        elevation={3}
        component={motion.div}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        sx={{ p: 4, width: "100%", maxWidth: 400, textAlign: "center" }}
      >
        <Typography variant="h5" gutterBottom>
          {t("login")}
        </Typography>

        <form onSubmit={handleSubmit} noValidate>
          <Stack spacing={2}>
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
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              component={motion.button}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {t("login")}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Stack>
  );
};

export default LoginPage;
