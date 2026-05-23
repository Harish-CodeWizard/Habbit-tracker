import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="w-full bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm py-3 px-4 flex items-center justify-between">
    <Link to="/" className="text-xl font-bold text-violet-700">HabitFlow</Link>
    <nav className="space-x-4">
      <Link to="/login" className="text-violet-700 hover:underline">Login</Link>
      <Link to="/signup" className="text-violet-700 hover:underline">Sign Up</Link>
    </nav>
  </header>
);

export default Navbar;

