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
  <aside className="hidden md:flex flex-col w-20 h-screen bg-white/80 backdrop-blur border-r border-gray-200 shadow-lg py-4 items-center space-y-8 fixed left-0 top-0 z-40">
    {navItems.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        className={({ isActive }) =>
          `flex flex-col items-center text-xs transition-colors duration-200 ${isActive ? 'text-primary' : 'text-gray-500'}`
        }
      >
        {item.icon}
        <span>{item.label}</span>
      </NavLink>
    ))}
  </aside>
);

export default Sidebar;
