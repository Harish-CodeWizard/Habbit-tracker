import MainLayout from '../components/layout/MainLayout';
import HabitList from '../components/habits/HabitList';
import HabitForm from '../components/habits/HabitForm';

export default function Habits() {
  return (
    <MainLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-violet-700">Habits</h1>
          <div className="text-sm text-gray-500">Manage your daily habits</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow-sm border">
            <HabitList />
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border">
            <h2 className="text-lg font-medium text-gray-700 mb-3">Add Habit</h2>
            <HabitForm />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
 
