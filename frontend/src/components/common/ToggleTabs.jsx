import React from 'react';

export default function ToggleTabs({ options = ['Evening', 'Morning'], selected = 0, onSelect }) {
  return (
    <div className="flex gap-2 mb-2">
      {options.map((label, i) => (
        <button
          key={label}
          className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${selected === i ? 'border-[#39ff14] text-[#39ff14]' : 'border-[#b0b3b8] text-[#b0b3b8]'}`}
          onClick={() => onSelect && onSelect(i)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
