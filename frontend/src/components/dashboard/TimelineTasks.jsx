import React from 'react';

const days = [
  { date: 'May 29', day: 'Fri', today: true, tasks: [], completed: 0, total: 0 },
  { date: 'May 28', day: 'Thu', tasks: [
    { text: 'Build your first habit', done: false },
    { text: 'Organize tasks into sheets', done: false },
  ], completed: 0, total: 2 },
  { date: 'May 27', day: 'Wed', tasks: [
    { text: 'Plan your day', done: false },
  ], completed: 1, total: 2 },
  { date: 'May 26', day: 'Tue', tasks: [
    { text: 'Get started with Tasks', done: false, subtasks: [
      'Tap this checkbox to complete a subtask',
      'Complete all subtasks to auto-finish the task',
      'Tap the task to add more subtasks',
    ] },
    { text: 'Explore the Timeline view', done: false },
  ], completed: 1, total: 3 },
];

export default function TimelineTasks() {
  return (
    <div className="px-4 py-2">
      <div className="flex gap-4 border-b border-[#232526] mb-2">
        <button className="text-[#39ff14] font-semibold border-b-2 border-[#39ff14] px-2 pb-1">Timeline</button>
        <button className="text-[#b0b3b8] font-semibold px-2 pb-1">All Tasks</button>
      </div>
      <div className="flex flex-col gap-6">
        {days.map((day, idx) => (
          <div key={day.date} className="relative">
            <div className="flex items-center gap-2 mb-1">
              <div className={`w-3 h-3 rounded-full ${day.today ? 'bg-[#39ff14]' : 'bg-[#b0b3b8]'}`}></div>
              <div className="text-[#b0b3b8] text-sm font-medium">{day.date} <span className="text-xs">{day.day}</span> {day.today && <span className="ml-2 bg-[#39ff14] text-black px-2 py-0.5 rounded text-xs">TODAY</span>}</div>
              <div className="ml-auto text-[#39ff14] text-xs">{day.completed}/{day.total}</div>
            </div>
            <div className="ml-6 flex flex-col gap-2">
              {day.tasks && day.tasks.map((task, tIdx) => (
                <div key={tIdx} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="accent-[#39ff14] w-4 h-4" checked={task.done} readOnly />
                    <span className={`text-base ${task.done ? 'line-through text-[#39ff14]' : 'text-[#ff4b4b]'}`}>{task.text}</span>
                  </div>
                  {task.subtasks && (
                    <div className="ml-6 flex flex-col gap-1">
                      {task.subtasks.map((sub, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2">
                          <input type="checkbox" className="accent-[#39ff14] w-3 h-3" readOnly />
                          <span className="text-xs text-[#b0b3b8]">{sub}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button className="text-[#b0b3b8] text-sm flex items-center gap-1 mt-1"><span className="text-lg">＋</span>Add task</button>
              {day.completed > 0 && <div className="ml-2 text-xs text-[#b0b3b8]">Completed {day.completed}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
