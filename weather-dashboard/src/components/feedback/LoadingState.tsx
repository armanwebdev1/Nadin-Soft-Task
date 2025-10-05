import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingState: React.FC = () => (
  <Box sx={{ display: "grid", placeItems: "center", py: 8 }}>
    <CircularProgress />
  </Box>
);
export default LoadingState;
