import React from "react";
import { Box, Typography } from "@mui/material";

const ErrorState: React.FC<{ message?: string }> = ({
  message = "An error occurred.",
}) => (
  <Box sx={{ display: "grid", placeItems: "center", py: 8 }}>
    <Typography variant="body1" color="error" sx={{ fontWeight: 600 }}>
      {message}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Please try again or refresh the page.
    </Typography>
  </Box>
);

export default ErrorState;
