import React from "react";
import { Box } from "@mui/material";
import TopBar from "./TopBar";

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: (t) => t.palette.background.default,
        color: (t) => t.palette.text.primary,
      }}
    >
      <TopBar />
      <Box sx={{ pt: 3 }}>{children}</Box>
    </Box>
  );
};

export default AppLayout;
