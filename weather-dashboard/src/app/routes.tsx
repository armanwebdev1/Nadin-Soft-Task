import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { useAuth } from "../features/auth/useAuth";
import DashboardPage from "@features/weather/DashboardPage";
import LoginPage from "@features/auth/LoginPage";

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <RequireAuth>
        <DashboardPage />
      </RequireAuth>
    ),
  },
  { path: "/login", element: <LoginPage /> },
];
