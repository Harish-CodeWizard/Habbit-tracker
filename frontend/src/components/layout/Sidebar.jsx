import {
  Home,
  BarChart3,
  CalendarDays,
  Award,
  User,
  Flame,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const navItems = [
  {
    to: "/dashboard",
    icon: Home,
    label: "Dashboard",
  },
  {
    to: "/habits",
    icon: Award,
    label: "Habits",
  },
  {
    to: "/analytics",
    icon: BarChart3,
    label: "Analytics",
  },
  {
    to: "/calendar",
    icon: CalendarDays,
    label: "Calendar",
  },
  {
    to: "/profile",
    icon: User,
    label: "Profile",
  },
];

const Sidebar = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-[88px] bg-[#111114]/95 backdrop-blur-2xl border-r border-zinc-800 z-50 flex-col items-center py-6">

        {/* Logo */}
        <div className="mb-10">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">

            <Flame size={24} className="text-white" />
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col items-center gap-5 flex-1">

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                title={item.label}
                className={({ isActive }) =>
                  `group relative flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                      : "text-zinc-500 hover:bg-zinc-800 hover:text-white"
                  }`
                }
              >
                <Icon size={24} />

                {/* Tooltip */}
                <span className="absolute left-20 whitespace-nowrap bg-zinc-900 border border-zinc-800 text-white text-sm px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">

                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom User */}
        <div className="mt-auto">

          <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-white font-semibold text-lg border border-zinc-700">

            H
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] bg-[#111114]/95 backdrop-blur-2xl border border-zinc-800 rounded-3xl px-2 py-3 z-50 shadow-2xl">

        <nav className="flex items-center justify-between">

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center flex-1 py-2 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-500"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20"
                          : "bg-transparent"
                      }`}
                    >
                      <Icon size={22} />
                    </div>

                    <span className="text-[11px] mt-1 font-medium">
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;