import React from "react";
import { Skeleton, Paper, Stack } from "@mui/material";

const WeatherSkeleton: React.FC = () => (
  <Paper
    sx={{
      p: 3,
      borderRadius: 3,
      transition: "all 0.3s ease",
      "&:hover": { transform: "translateY(-4px)", boxShadow: 6 },
    }}
  >
    <Stack spacing={2} alignItems="center">
      <Skeleton variant="circular" width={64} height={64} />
      <Skeleton variant="text" width={80} height={40} />
      <Skeleton variant="text" width={120} />
      <Skeleton variant="text" width={100} />
    </Stack>
  </Paper>
);

export default WeatherSkeleton;
