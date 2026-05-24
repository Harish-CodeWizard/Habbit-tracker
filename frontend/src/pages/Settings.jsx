import MainLayout from '../components/layout/MainLayout';

const Settings = () => (
	<MainLayout>
		<div>
			<h1 className="text-3xl font-bold text-gray-900 mb-6">Settings</h1>
			<div className="max-w-2xl space-y-6">
				<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
					<h2 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h2>
					<div className="space-y-4">
						{[
							{ label: 'Notifications', desc: 'Receive daily reminders', checked: true },
							{ label: 'Email Updates', desc: 'Weekly habit reports', checked: true },
							{ label: 'Dark Mode', desc: 'Toggle dark appearance', checked: false }
						].map((s, i) => (
							<div key={i} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
								<div>
									<div className="font-medium text-gray-900">{s.label}</div>
									<div className="text-sm text-gray-600">{s.desc}</div>
								</div>
								<input type="checkbox" className="h-5 w-5 accent-violet-600" defaultChecked={s.checked} />
							</div>
						))}
					</div>
				</div>

				<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
					<h2 className="text-lg font-semibold text-gray-900 mb-4">Danger Zone</h2>
					<button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold">Delete account</button>
				</div>
			</div>
		</div>
	</MainLayout>
);

export default Settings;
