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
            <div className="text-sm text-gray-500">{h.frequency || 'daily'}</div>
          </div>
          <div className="text-sm text-gray-500">{h.streak || 0} streak</div>
        </li>
      ))}
    </ul>
  );
}
