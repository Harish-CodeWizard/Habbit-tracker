import React from 'react';
import { useNavigate } from 'react-router-dom';

const navs = [
  { label: 'Tasks', icon: '✔️', key: 'tasks', route: '/timeline' },
  { label: 'Measure', icon: '⏱️', key: 'measure', route: '/measure' },
  { label: 'Weekly', icon: '📊', key: 'weekly', route: '/weekly' },
  { label: 'Check', icon: '✅', key: 'check', route: '/check' },
];

export default function BottomNav({ active }) {
  const navigate = useNavigate();
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-md flex items-center justify-between bg-[#232526] rounded-2xl px-4 py-2 shadow-lg border border-[#2e2f31]" style={{boxShadow: '0 0 16px #39ff14'}}>
      {navs.map((nav) => (
        <button
          key={nav.key}
          className={`flex-1 flex flex-col items-center py-1 px-2 mx-1 rounded-xl transition-all ${active === nav.key ? 'bg-[#39ff14] text-black font-bold shadow-[0_0_8px_#39ff14]' : 'text-[#b0b3b8]'}`}
          onClick={() => nav.route !== '#' && navigate(nav.route)}
        >
          <span className="text-2xl">{nav.icon}</span>
          <span className="text-xs mt-1">{nav.label}</span>
        </button>
      ))}
      <button
        className="ml-2 bg-[#39ff14] text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-[0_0_8px_#39ff14]"
        onClick={() => navigate('/add-task')}
      >
        +
      </button>
    </nav>
  );
}
