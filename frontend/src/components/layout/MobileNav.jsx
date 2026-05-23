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
  <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-t border-gray-200 shadow-lg flex justify-around py-2 md:hidden">
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
  </nav>
);

export default MobileNav;
