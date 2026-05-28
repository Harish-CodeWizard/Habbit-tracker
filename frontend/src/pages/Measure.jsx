import React from 'react';
import Header from '../components/common/Header';
import BottomNav from '../components/common/BottomNav';

const habits = [
  {
    icon: '📚',
    title: 'Leetcode - 1 Solved',
    streak: 0,
    progress: '0/2 today',
    grid: Array(35).fill(0),
  },
  {
    icon: '🟪',
    title: 'Strikers Topics Completed',
    streak: 0,
    progress: '1 pages this week',
    grid: Array(35).fill(0).map((v, i) => (i === 9 ? 1 : 0)),
    isPages: true,
  },
  {
    icon: '📚',
    title: 'Dbms',
    streak: 0,
    progress: '0/2 today',
    grid: Array(35).fill(0),
  },
];

function HabitMonthGrid({ grid, isPages }) {
  // 5 weeks x 7 days
  return (
    <div className="grid grid-cols-7 gap-1 mt-2">
      {grid.map((val, i) => (
        <div
          key={i}
          className={`w-7 h-7 flex items-center justify-center rounded-md border text-xs ${val ? (isPages ? 'bg-[#6c63ff] text-white border-[#6c63ff]' : 'bg-[#39ff14] text-black border-[#39ff14]') : 'bg-[#232526] text-[#b0b3b8] border-[#232526]'}`}
        >
          {val ? (isPages ? `${val}` : val) : ''}
        </div>
      ))}
    </div>
  );
}

export default function Measure() {
  return (
    <div className="min-h-screen bg-[#18191A] flex flex-col">
      <Header />
      <main className="flex-1 px-4 py-2 overflow-y-auto">
        <div className="flex gap-2 mb-2">
          {['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Today'].map((d, i) => (
            <button key={d} className={`flex-1 py-1 rounded-lg text-xs font-semibold ${d === 'Today' ? 'bg-[#18191A] border-2 border-[#39ff14] text-[#39ff14]' : 'bg-[#232526] text-[#b0b3b8]'}`}>{d}</button>
          ))}
        </div>
        {habits.map((habit, idx) => (
          <div key={idx} className="bg-[#18191A] border border-[#232526] rounded-2xl p-4 mb-4 shadow-[0_0_8px_#6c63ff33]">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{habit.icon}</span>
              <div className="flex-1">
                <div className="text-white font-semibold text-base">{habit.title}</div>
                <div className="text-xs text-[#b0b3b8]">Streak: {habit.streak} <span className="ml-2">• {habit.progress}</span></div>
              </div>
              <button className="text-[#b0b3b8] text-xl">⋮</button>
            </div>
            <HabitMonthGrid grid={habit.grid} isPages={habit.isPages} />
          </div>
        ))}
      </main>
      <BottomNav active="measure" />
    </div>
  );
}
