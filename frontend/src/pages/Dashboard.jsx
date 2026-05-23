import MainLayout from '../components/layout/MainLayout';
import SummaryCard from '../components/dashboard/SummaryCard';
import StreakCard from '../components/dashboard/StreakCard';
import ProgressChart from '../components/dashboard/ProgressChart';

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-violet-700 mb-4">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <SummaryCard title="Total Habits" value="12" />
          <SummaryCard title="Completed Today" value="7" />
          <StreakCard streak={5} best={12} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow-sm border">
            <h2 className="text-lg font-medium text-gray-700 mb-3">Progress</h2>
            <ProgressChart />
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border">
            <h2 className="text-lg font-medium text-gray-700 mb-3">Today</h2>
            <ul className="space-y-3">
              <li className="p-3 rounded-md bg-violet-50">Morning run — <span className="font-semibold">Done</span></li>
              <li className="p-3 rounded-md bg-white border">Read 20 pages — <span className="text-gray-500">Pending</span></li>
              <li className="p-3 rounded-md bg-white border">Meditate — <span className="text-gray-500">Pending</span></li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

