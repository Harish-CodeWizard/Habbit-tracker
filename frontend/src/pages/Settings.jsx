import MainLayout from '../components/layout/MainLayout';

const Settings = () => (
	<MainLayout>
		<div className="p-6">
			<h1 className="text-2xl font-semibold text-violet-700 mb-4">Settings</h1>
			<div className="bg-white p-4 rounded-xl shadow-sm border max-w-xl">
				<div className="flex items-center justify-between py-3 border-b">
					<div>
						<div className="font-medium text-gray-700">Notifications</div>
						<div className="text-sm text-gray-500">Receive updates and reminders</div>
					</div>
					<input type="checkbox" className="h-5 w-5 accent-violet-500" defaultChecked />
				</div>

				<div className="flex items-center justify-between py-3 border-b">
					<div>
						<div className="font-medium text-gray-700">Dark Mode</div>
						<div className="text-sm text-gray-500">Toggle dark appearance</div>
					</div>
					<input type="checkbox" className="h-5 w-5 accent-violet-500" />
				</div>

				<div className="py-3">
					<button className="px-4 py-2 bg-red-600 text-white rounded-lg">Delete account</button>
				</div>
			</div>
		</div>
	</MainLayout>
);

export default Settings;
