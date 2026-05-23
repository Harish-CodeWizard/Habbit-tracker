import { Home, BarChart, Calendar, Award, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/dashboard', icon: <Home />, label: 'Home' },
  { to: '/habits', icon: <Award />, label: 'Habits' },
  { to: '/analytics', icon: <BarChart />, label: 'Analytics' },
  { to: '/calendar', icon: <Calendar />, label: 'Calendar' },
  { to: '/profile', icon: <User />, label: 'Profile' },
];

const Sidebar = () => (
  <aside className="hidden md:flex flex-col w-20 h-screen bg-white/90 backdrop-blur border-r border-gray-100 shadow-sm py-4 items-center space-y-6 fixed left-0 top-0 z-40">
    {navItems.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        title={item.label}
        aria-label={item.label}
        className={({ isActive }) =>
          `flex flex-col items-center text-xs transition-colors duration-200 ${isActive ? 'text-violet-600' : 'text-gray-500'}`
        }
      >
        <div className="p-2 rounded-md hover:bg-violet-50">{item.icon}</div>
      </NavLink>
    ))}
  </aside>
);

export default Sidebar;
