import MainLayout from '../components/layout/MainLayout';

const Achievements = () => (
	<MainLayout>
		<div className="p-6">
			<h1 className="text-2xl font-semibold text-violet-700 mb-4">Achievements</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{[1,2,3,4,5,6].map((n) => (
					<div key={n} className="bg-white p-4 rounded-xl shadow-sm border text-center">
						<div className="text-3xl font-bold text-violet-600 mb-2">🏆</div>
						<div className="font-semibold">Achievement {n}</div>
						<div className="text-sm text-gray-500">Unlocked for consistency</div>
					</div>
				))}
			</div>
		</div>
	</MainLayout>
);

export default Achievements;
