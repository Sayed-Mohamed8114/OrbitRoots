import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRouter from "./Routes/AppRouter";
import AuthProvider from "./Contexts/AuthContext";
export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}
