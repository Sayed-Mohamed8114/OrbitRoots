import { NavLink, Link } from "react-router-dom";
import {
  Sprout,
  LayoutDashboard,
  Sparkles,
  PlusCircle,
  History,
  Settings,
  Leaf,
  ChevronRight,
} from "lucide-react";

const navigationGroups = [
  {
    title: "WORKSPACE",
    items: [
      {
        label: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
        end: true,
      },
      {
        label: "Recommendations",
        path: "/dashboard/recommendations",
        icon: Sparkles,
      },
      {
        label: "Start Planting",
        path: "/dashboard/planting",
        icon: PlusCircle,
      },
    ],
  },
  {
    title: "MY FARM",
    items: [
      {
        label: "Crop History",
        path: "/dashboard/history",
        icon: History,
      },
    ],
  },
];

function SidebarLink({ item }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      end={item.end}
      className={({ isActive }) =>
        `group relative flex items-center gap-3 rounded-xl px-3 py-3
        text-sm font-medium transition-all duration-200
        ${
          isActive
            ? "bg-green-100 text-green-800"
            : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-green-600" />
          )}

          <Icon
            size={19}
            strokeWidth={isActive ? 2.3 : 1.8}
            className={`shrink-0 transition-colors ${
              isActive
                ? "text-green-700"
                : "text-gray-400 group-hover:text-gray-700"
            }`}
          />

          <span className="hidden md:block flex-1">{item.label}</span>

          {isActive && (
            <ChevronRight
              size={15}
              className="hidden md:block text-green-700"
            />
          )}
        </>
      )}
    </NavLink>
  );
}

export default function Sidebar() {
  return (
    <aside className="sticky top-0 z-40 flex h-screen w-20 shrink-0 flex-col border-r border-gray-200/80 bg-white px-3 py-5 md:w-64 md:px-5">
      <Link to="/dashboard" className="mb-10 flex items-center gap-3 px-1">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green-700 text-white shadow-lg shadow-green-700/20">
          <Sprout size={24} strokeWidth={2} />
        </div>

        <div className="hidden min-w-0 md:block">
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            orbit<span className="text-green-700">roots</span>
          </h1>
          <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
            Smart farming
          </p>
        </div>
      </Link>

      <nav className="flex-1 space-y-8 overflow-y-auto">
        {navigationGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-3 hidden px-3 text-[10px] font-bold tracking-[0.18em] text-gray-400 md:block">
              {group.title}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => (
                <SidebarLink key={item.path} item={item} />
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-6 border-t border-gray-100 pt-5">
        <div className="space-y-1">
          <NavLink
            to="/dashboard/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-green-100 text-green-800"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }`
            }
          >
            <Settings size={19} className="shrink-0" />
            <span className="hidden md:block">Settings</span>
          </NavLink>
        </div>

        <div className="mt-5 flex items-center gap-3 rounded-2xl bg-gray-50 p-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-200 text-sm font-bold text-green-800">
            OR
          </div>

          <div className="hidden min-w-0 flex-1 md:block">
            <p className="truncate text-xs font-semibold text-gray-800">
              My Farm
            </p>
            <p className="truncate text-[10px] text-gray-400">Farm workspace</p>
          </div>

          <Leaf size={16} className="hidden text-green-600 md:block" />
        </div>
      </div>
    </aside>
  );
}
