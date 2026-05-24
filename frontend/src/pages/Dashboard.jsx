import MainLayout from '../components/layout/MainLayout';
import SummaryCard from '../components/dashboard/SummaryCard';
import StreakCard from '../components/dashboard/StreakCard';
import ProgressChart from '../components/dashboard/ProgressChart';

export default function Dashboard() {
  return (
    <MainLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <SummaryCard title="Total Habits" value="12" />
          <SummaryCard title="Completed Today" value="7" />
          <StreakCard streak={5} best={12} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Progress</h2>
            <ProgressChart />
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Today's Habits</h2>
            <ul className="space-y-3">
              <li className="p-3 rounded-lg bg-green-50 border border-green-100">✓ Morning run — <span className="font-semibold text-green-600">Done</span></li>
              <li className="p-3 rounded-lg bg-gray-50 border border-gray-200">Read 20 pages — <span className="text-gray-500">Pending</span></li>
              <li className="p-3 rounded-lg bg-gray-50 border border-gray-200">Meditate — <span className="text-gray-500">Pending</span></li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

