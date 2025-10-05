import React from "react";
import { Paper, Typography, Button, Stack } from "@mui/material";

const ErrorState: React.FC<{ message: string; onRetry?: () => void }> = ({
  message,
  onRetry,
}) => (
  <Paper
    sx={{
      p: 3,
      borderRadius: 3,
      transition: "all 0.3s ease",
      "&:hover": { transform: "translateY(-4px)", boxShadow: 6 },
    }}
  >
    <Stack spacing={2} alignItems="center">
      <Typography color="error" variant="h6">
        {message}
      </Typography>
      {onRetry && (
        <Button variant="contained" onClick={onRetry}>
          Retry
        </Button>
      )}
    </Stack>
  </Paper>
);

export default ErrorState;
