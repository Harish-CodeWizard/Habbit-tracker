import MainLayout from '../components/layout/MainLayout';
import HabitList from '../components/habits/HabitList';
import HabitForm from '../components/habits/HabitForm';

export default function Habits() {
  return (
    <MainLayout>
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Habits</h1>
            <p className="text-sm text-gray-600 mt-1">Manage your daily habits</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <HabitList />
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Add Habit</h2>
            <HabitForm />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
 
