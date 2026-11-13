
import { Outlet } from "react-router-dom";
import Sidebar from "../DashBoard/SideBar";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="min-w-0 flex-1">
        <div className="mx-auto min-h-screen w-full max-w-[1600px] p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
