import React from 'react';
import Header from '../components/common/Header';
import BottomNav from '../components/common/BottomNav';

const habits = [
  {
    icon: '📚',
    title: 'Leetcode - 1 Solved',
    streak: 0,
    progress: '0/7 days',
    week: [0, 1, 0, 0, 0, 0, 0],
  },
  {
    icon: '🟪',
    title: 'Strikers Topics Completed',
    streak: 0,
    progress: '1 pages this week',
    week: [0, 1, 0, 0, 0, 0, 0],
    isPages: true,
  },
  {
    icon: '📚',
    title: 'Dbms',
    streak: 0,
    progress: '0/7 days',
    week: [0, 0, 0, 0, 0, 0, 0],
  },
];

const weekDays = ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su'];

export default function Weekly() {
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
            <div className="flex gap-2 mt-2">
              {weekDays.map((d, i) => (
                <div key={d} className={`w-8 h-8 flex items-center justify-center rounded-lg border ${habit.week[i] ? (habit.isPages ? 'bg-[#6c63ff] text-white border-[#6c63ff]' : 'bg-[#39ff14] text-black border-[#39ff14]') : 'bg-[#232526] text-[#b0b3b8] border-[#232526]'} ${i === 4 ? 'border-2 border-white' : ''}`}>
                  {habit.week[i] ? (habit.isPages ? `${habit.week[i]} pages` : habit.week[i]) : ''}
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
      <BottomNav active="weekly" />
    </div>
  );
}
