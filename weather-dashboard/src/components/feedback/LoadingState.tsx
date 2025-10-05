import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingState: React.FC = () => (
  <Box sx={{ display: "grid", placeItems: "center", py: 8 }}>
    <CircularProgress />
    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
      Loading…
    </Typography>
  </Box>
);

export default LoadingState;
