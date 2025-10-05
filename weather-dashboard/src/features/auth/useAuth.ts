import { useState, useEffect } from "react";

const LS_USER = "wd:user";

export function useAuth() {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(LS_USER);
    if (stored) setUser(stored);
  }, []);

  const login = (name: string) => {
    localStorage.setItem(LS_USER, name);
    setUser(name);
  };

  const logout = () => {
    localStorage.removeItem(LS_USER);
    setUser(null);
  };

  return { user, login, logout };
}
