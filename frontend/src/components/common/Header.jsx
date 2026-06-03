import React from 'react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-[#18191A] text-white border-b border-[#232526]">
      <div className="text-lg font-semibold">Today, 29th May</div>
      <div className="flex items-center gap-3">
        <span className="text-xl">🔒</span>
        <span className="text-xl">☁️</span>
        <button className="text-xl"><span role="img" aria-label="settings">⚙️</span></button>
      </div>
    </header>
  );
}
