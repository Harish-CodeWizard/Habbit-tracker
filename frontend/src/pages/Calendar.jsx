import MainLayout from '../components/layout/MainLayout';
import { useHabits } from '../hooks/useHabits';
import habitService from '../services/habitService';
import React, { useState } from 'react';

const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

const Calendar = () => {
	const { habits, loading } = useHabits();
	const [selectedHabit, setSelectedHabit] = useState('');
	const [selectedDate, setSelectedDate] = useState('');
	const [message, setMessage] = useState('');
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth();
	const days = daysInMonth(year, month);

	async function handleSetReminder(date) {
		if (!selectedHabit) {
			setMessage('Please select a habit first.');
			return;
		}
		setMessage('');
		try {
			await habitService.updateHabit(selectedHabit, { reminders: { [date]: true } });
			setMessage('Reminder set!');
		} catch (err) {
			setMessage('Failed to set reminder.');
		}
	}

	return (
		<MainLayout>
			<div>
				<h1 className="text-3xl font-bold text-gray-900 mb-6">Calendar</h1>
				<div className="mb-4">
					<label className="block text-sm mb-1">Select Habit to Set Reminder:</label>
					<select
						className="border rounded px-2 py-1"
						value={selectedHabit}
						onChange={e => setSelectedHabit(e.target.value)}
					>
						<option value="">-- Select Habit --</option>
						{Array.isArray(habits) && habits.map(h => (
							<option key={h.id} value={h.id}>{h.title}</option>
						))}
					</select>
				</div>
				<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
					<div className="grid grid-cols-7 gap-2 text-sm text-gray-600 mb-4">
						{['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=> (
							<div key={d} className="text-center font-semibold text-gray-700">{d}</div>
						))}
					</div>
					<div className="grid grid-cols-7 gap-2">
						{Array.from({length:days}).map((_,i)=> {
							const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(i+1).padStart(2,'0')}`;
							return (
								<div
									key={i}
									className="h-16 border border-gray-200 rounded-lg p-1 text-xs font-medium flex items-start justify-end text-gray-700 hover:bg-violet-50 cursor-pointer"
									onClick={() => handleSetReminder(dateStr)}
									title="Click to set reminder for this day"
								>
									{i+1}
								</div>
							);
						})}
					</div>
				</div>
				{message && <div className="mt-4 text-sm text-blue-600">{message}</div>}
			</div>
		</MainLayout>
	);
};

export default Calendar;
