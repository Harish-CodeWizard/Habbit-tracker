import React from 'react';

export default function HabitCard({ habit }) {
  if (!habit) return null;
  return (
    <div className="p-4 border rounded bg-white shadow">
      <div className="font-bold text-lg text-gray-800">{habit.title}</div>
      <div className="text-sm text-gray-500">Streak: {habit.streak || 0} days</div>
      <div className="text-sm text-gray-500">Completed: {habit.percentCompleted || 0}/10</div>
      {habit.reminders && (
        <div className="text-xs text-blue-500 mt-1">Reminder: {Object.keys(habit.reminders).join(', ')}</div>
      )}
    </div>
  );
}
