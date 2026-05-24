import MainLayout from '../components/layout/MainLayout';
import ProgressChart from '../components/dashboard/ProgressChart';

const Analytics = () => (
	<MainLayout>
		<div>
			<h1 className="text-3xl font-bold text-gray-900 mb-6">Analytics</h1>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
				<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
					<div className="text-3xl font-bold text-violet-600">42</div>
					<p className="text-sm text-gray-600 mt-2">Total Days Tracked</p>
				</div>
				<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
					<div className="text-3xl font-bold text-green-600">87%</div>
					<p className="text-sm text-gray-600 mt-2">Completion Rate</p>
				</div>
				<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
					<div className="text-3xl font-bold text-orange-600">12</div>
					<p className="text-sm text-gray-600 mt-2">Current Streak</p>
				</div>
			</div>
			<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
				<h2 className="text-lg font-semibold text-gray-900 mb-4">Weekly Progress</h2>
				<ProgressChart />
			</div>
		</div>
	</MainLayout>
);

export default Analytics;
