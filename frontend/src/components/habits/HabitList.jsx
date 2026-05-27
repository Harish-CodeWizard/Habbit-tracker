import React, { useEffect, useState } from 'react';
import habitService from '../../services/habitService';

export default function HabitList() {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    habitService
      .getHabits()
      .then((data) => {
        if (mounted) setHabits(data || []);
      })
      .catch((err) => {
        if (mounted) setError(err);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div className="text-center p-6">Loading habits...</div>;
  if (error) return <div className="text-red-500 p-6">Error loading habits</div>;

  if (!habits.length) return <div className="p-6">No habits yet.</div>;

  return (
    <ul className="space-y-2">
      {habits.map((h) => (
        <li key={h.id} className="flex items-center justify-between p-3 border rounded">
          <div>
            <div className="font-medium text-gray-800">{h.title}</div>
            <div className="text-sm text-gray-500">Streak: {h.streak || 0} days</div>
            <div className="text-sm text-gray-500">Completed: {h.percentCompleted || 0}/10</div>
            {h.reminders && (
              <div className="text-xs text-blue-500 mt-1">Reminder: {Object.keys(h.reminders).join(', ')}</div>
            )}
          </div>
          <div className="flex gap-2">
            <button className="text-blue-600 hover:underline" onClick={() => alert('Edit coming soon')}>Edit</button>
            <button className="text-red-600 hover:underline" onClick={() => alert('Delete coming soon')}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
