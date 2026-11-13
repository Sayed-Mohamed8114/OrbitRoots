import { Route, Routes } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";
import SigninPage from "../Pages/SigninPage/SigninPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import MainLayout from "../Components/Layout/MainLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import History from "../Pages/History/History";
import Plantings from "../Pages/Plantings/Plantings";
import Recommendations from "../Pages/Recommendations/Recommendations";
import Settings from "../Pages/Settings/Settings";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      <Route path="/dashboard" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route
          path="/dashboard/recommendations"
          element={<Recommendations />}
        />
        <Route path="/dashboard/planting" element={<Plantings />} />
        <Route path="/dashboard/history" element={<History />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
