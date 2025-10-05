import { Navigate } from "react-router-dom";
import { useAuth } from "@features/auth/AuthProvider";
import React, { lazy } from "react";

const DashboardPage = lazy(() => import("@features/weather/DashboardPage"));
const LoginPage = lazy(() => import("@features/auth/LoginPage"));

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

export const routes = [
  { path: "/", element: <Navigate to="/login" replace /> },
  { path: "/login", element: <LoginPage /> },
  {
    path: "/dashboard",
    element: (
      <RequireAuth>
        <DashboardPage />
      </RequireAuth>
    ),
  },
  { path: "*", element: <Navigate to="/" replace /> },
];
