import api from "../API/Api";
import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchUser() {
    const response = await api.get("/api/auth/me");
    setUser(response.data);
    return response.data;
  }

  async function Signin(loginData) {
    const response = await api.post("/api/auth/login", loginData);
    setUser(response.data.user);
    await fetchUser();
    return response.data;
  }

  async function Signup(registerData) {
    const response = await api.post("/api/auth/register", registerData);

    return response.data;
  }


  useEffect(() => {
    async function initializeAuth() {
      try {
        await fetchUser();
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    initializeAuth();
  }, []);

  const value = {
    user,
    loading,
    isAuthenticated: Boolean(user),
    Signin,
    Signup,
    refreshUser: fetchUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}