import React, { useState } from 'react';
import habitService from '../../services/habitService';

export default function HabitForm({ onCreated } = {}) {
  const [title, setTitle] = useState('');
  const [percentCompleted, setPercentCompleted] = useState(0);
  const [reminderDate, setReminderDate] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const reminders = reminderDate ? { [reminderDate]: true } : undefined;
      await habitService.createHabit({ title, percentCompleted, reminders });
      setTitle('');
      setPercentCompleted(0);
      setReminderDate('');
      if (onCreated) onCreated();
    } catch (err) {
      setError(err.message || 'Failed to create habit');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="block text-sm text-gray-600">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 w-full border rounded px-3 py-2"
          placeholder="e.g. Morning Run"
          required
        />
      </div>
      <div>
        <label className="block text-sm text-gray-600">Percent Completed (0-10)</label>
        <input
          type="number"
          min={0}
          max={10}
          value={percentCompleted}
          onChange={e => setPercentCompleted(Number(e.target.value))}
          className="mt-1 w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm text-gray-600">Reminder Date</label>
        <input
          type="date"
          value={reminderDate}
          onChange={e => setReminderDate(e.target.value)}
          className="mt-1 w-full border rounded px-3 py-2"
        />
      </div>

      {error && <div className="text-red-500">{error}</div>}

      <button
        type="submit"
        disabled={submitting}
        className="bg-violet-600 text-white px-4 py-2 rounded"
      >
        {submitting ? 'Adding...' : 'Add Habit'}
      </button>
    </form>
  );
}
