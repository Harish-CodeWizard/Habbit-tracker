import React from 'react';

export default function HabitGrid({ title = '', streak = 0, progress = '', data = [], isPages = false }) {
  // data: array of 7 (week) or 35+ (month) numbers
  const weekDays = ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su'];
  return (
    <div className="bg-[#18191A] border border-[#232526] rounded-2xl p-4 mb-2 shadow-[0_0_8px_#6c63ff33]">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">📚</span>
        <div className="flex-1">
          <div className="text-white font-semibold text-base">{title}</div>
          <div className="text-xs text-[#b0b3b8]">Streak: {streak} <span className="ml-2">• {progress}</span></div>
        </div>
        <button className="text-[#b0b3b8] text-xl">⋮</button>
      </div>
      <div className="flex gap-2 mt-2">
        {weekDays.map((d, i) => (
          <div key={d} className={`w-8 h-8 flex items-center justify-center rounded-lg border ${data[i] ? (isPages ? 'bg-[#6c63ff] text-white border-[#6c63ff]' : 'bg-[#39ff14] text-black border-[#39ff14]') : 'bg-[#232526] text-[#b0b3b8] border-[#232526]'} ${i === 4 ? 'border-2 border-white' : ''}`}>
            {data[i] ? (isPages ? `${data[i]} pages` : data[i]) : ''}
          </div>
        ))}
      </div>
    </div>
  );
}
