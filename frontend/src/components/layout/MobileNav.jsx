import {
  Home,
  BarChart3,
  CalendarDays,
  Award,
  User,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const navItems = [
  {
    to: "/dashboard",
    icon: Home,
    label: "Home",
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

const MobileNav = () => {
  return (
    <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[94%] z-50">

      <nav className="bg-[#111114]/95 backdrop-blur-2xl border border-zinc-800 rounded-[28px] px-2 py-3 shadow-[0_0_30px_rgba(59,130,246,0.12)]">

        <div className="flex items-center justify-between gap-1">

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
                    {/* Icon Container */}
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20 scale-105"
                          : "bg-transparent"
                      }`}
                    >
                      <Icon size={22} />
                    </div>

                    {/* Label */}
                    <span
                      className={`text-[11px] mt-1 font-medium transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-zinc-500"
                      }`}
                    >
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;