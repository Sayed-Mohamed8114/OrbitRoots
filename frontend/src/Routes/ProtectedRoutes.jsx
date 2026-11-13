import Loader from "@/Components/Common/Loader";
import { useAuth } from "@/Contexts/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoutes() {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Loader />;
  }
  if (!isAuthenticated) {
    return <Navigate to={"/signin"} replace state={{ from: location }} />;
  }
  return <Outlet />;
}
