import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TopBar from "./TopBar";

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        bgcolor: (t) => t.palette.background.default,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TopBar />
      <Container maxWidth="md" sx={{ flex: 1, py: { xs: 2, md: 4 } }}>
        {children}
      </Container>
    </Box>
  );
};
export default AppLayout;
