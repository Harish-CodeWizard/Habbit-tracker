import MainLayout from '../components/layout/MainLayout';
import ProgressChart from '../components/dashboard/ProgressChart';

const Analytics = () => (
	<MainLayout>
		<div className="p-6">
			<h1 className="text-2xl font-semibold text-violet-700 mb-4">Analytics</h1>
			<div className="bg-white p-4 rounded-xl shadow-sm border">
				<h2 className="text-lg font-medium text-gray-700 mb-3">Weekly Progress</h2>
				<ProgressChart />
			</div>
		</div>
	</MainLayout>
);

export default Analytics;
