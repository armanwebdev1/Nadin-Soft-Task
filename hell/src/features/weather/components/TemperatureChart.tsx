import React, { Suspense, lazy } from "react";
import { Paper, Typography } from "@mui/material";

const ChartInner = lazy(() => import("./TemperatureChartInner"));

const TemperatureChart: React.FC<{ forecast: any }> = ({ forecast }) => (
  <Paper
    elevation={0}
    sx={{
      p: 3,
      borderRadius: 4,
      border: (t) => `1px solid ${t.palette.divider}`,
      backdropFilter: "saturate(1.25) blur(8px)",
    }}
  >
    <Typography variant="h6" gutterBottom>
      Average monthly temperature
    </Typography>
    <Suspense fallback={<div>Loading chart...</div>}>
      <ChartInner forecast={forecast} />
    </Suspense>
  </Paper>
);

export default TemperatureChart;
