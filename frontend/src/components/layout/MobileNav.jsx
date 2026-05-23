import { Home, BarChart, Calendar, Award, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/dashboard', icon: <Home />, label: 'Home' },
  { to: '/habits', icon: <Award />, label: 'Habits' },
  { to: '/analytics', icon: <BarChart />, label: 'Analytics' },
  { to: '/calendar', icon: <Calendar />, label: 'Calendar' },
  { to: '/profile', icon: <User />, label: 'Profile' },
];

const MobileNav = () => (
  <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-gray-100 shadow-sm flex justify-around py-2 md:hidden">
    {navItems.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        className={({ isActive }) =>
          `flex flex-col items-center text-xs gap-1 transition-colors duration-200 ${isActive ? 'text-violet-600' : 'text-gray-500'}`
        }
      >
        <div className="p-1 rounded-md">{item.icon}</div>
        <span className="text-[10px]">{item.label}</span>
      </NavLink>
    ))}
  </nav>
);

export default MobileNav;
