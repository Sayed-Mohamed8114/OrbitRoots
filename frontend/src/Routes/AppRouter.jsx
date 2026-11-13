import { Route, Routes } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";
import SigninPage from "../Pages/SigninPage/SigninPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}
