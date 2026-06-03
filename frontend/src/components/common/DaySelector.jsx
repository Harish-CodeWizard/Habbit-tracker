import React from 'react';

const days = [
  { label: 'Sat', count: 0 },
  { label: 'Sun', count: 0 },
  { label: 'Mon', count: 0 },
  { label: 'Tue', count: 1 },
  { label: 'Wed', count: 0 },
  { label: 'Thu', count: 0 },
  { label: 'Today', count: 0 },
];

export default function DaySelector({ selected = 'Tue' }) {
  return (
    <div className="flex gap-2 mb-2">
      {days.map((d) => (
        <button
          key={d.label}
          className={`flex-1 py-1 rounded-lg text-xs font-semibold flex flex-col items-center ${d.label === selected ? 'bg-[#18191A] border-2 border-[#39ff14] text-[#39ff14]' : 'bg-[#232526] text-[#b0b3b8]'} ${d.count ? 'font-bold' : ''}`}
        >
          <span>{d.label}</span>
          <span className="text-[10px]">{d.count ? `${d.count}/3` : ''}</span>
        </button>
      ))}
    </div>
  );
}
