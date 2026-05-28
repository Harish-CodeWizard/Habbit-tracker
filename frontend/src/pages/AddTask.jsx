import React, { useState } from 'react';
import Header from '../components/common/Header';

export default function AddTask() {
  const [task, setTask] = useState('');
  const [subtasks, setSubtasks] = useState(['']);

  return (
    <div className="min-h-screen bg-[#18191A] flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-[#232526] p-8 rounded-2xl shadow-[0_0_16px_#39ff14] border border-[#39ff14] w-full max-w-md">
          <div className="text-[#39ff14] text-xl font-bold mb-4">Add Task</div>
          <input
            className="w-full mb-4 px-3 py-2 rounded-lg bg-[#18191A] border border-[#39ff14] text-white focus:outline-none focus:ring-2 focus:ring-[#39ff14]"
            placeholder="Task name"
            value={task}
            onChange={e => setTask(e.target.value)}
          />
          <div className="mb-4">
            <div className="text-[#b0b3b8] mb-2 text-sm">Subtasks</div>
            {subtasks.map((sub, idx) => (
              <input
                key={idx}
                className="w-full mb-2 px-3 py-2 rounded-lg bg-[#18191A] border border-[#232526] text-white focus:outline-none focus:ring-2 focus:ring-[#39ff14]"
                placeholder={`Subtask ${idx + 1}`}
                value={sub}
                onChange={e => {
                  const copy = [...subtasks];
                  copy[idx] = e.target.value;
                  setSubtasks(copy);
                }}
              />
            ))}
            <button
              className="w-full py-1 mt-1 rounded-lg bg-[#232526] border border-[#39ff14] text-[#39ff14] text-sm font-semibold hover:bg-[#18191A]"
              onClick={() => setSubtasks([...subtasks, ''])}
            >
              + Add subtask
            </button>
          </div>
          <button
            className="w-full py-2 rounded-lg bg-[#39ff14] text-black font-bold text-lg shadow-[0_0_8px_#39ff14] hover:bg-[#2fff10]"
          >
            Add Task
          </button>
        </div>
      </main>
    </div>
  );
}
