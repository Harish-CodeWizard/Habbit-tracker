import MainLayout from '../components/layout/MainLayout';

const Achievements = () => (
	<MainLayout>
		<div>
			<h1 className="text-3xl font-bold text-gray-900 mb-6">Achievements</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{[
					{ icon: '🔥', title: 'On Fire!', desc: '7-day streak' },
					{ icon: '⭐', title: 'Rising Star', desc: 'Completed 10 habits' },
					{ icon: '🏆', title: 'Champion', desc: 'Reached 30-day streak' },
					{ icon: '💪', title: 'Unstoppable', desc: '100% completion' },
					{ icon: '🎯', title: 'Goal Getter', desc: 'Added 5 habits' },
					{ icon: '👑', title: 'Legend', desc: 'Lifetime member' }
				].map((a, i) => (
					<div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
						<div className="text-4xl mb-3">{a.icon}</div>
						<h3 className="font-semibold text-gray-900">{a.title}</h3>
						<p className="text-sm text-gray-600 mt-1">{a.desc}</p>
					</div>
				))}
			</div>
		</div>
	</MainLayout>
);

export default Achievements;
