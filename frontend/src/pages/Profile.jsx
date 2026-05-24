import MainLayout from '../components/layout/MainLayout';

export default function Profile() {
  return (
    <MainLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Profile</h1>
        <div className="max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-violet-400 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold text-white">J</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
              <p className="text-gray-600">john@example.com</p>
              <p className="text-sm text-gray-500 mt-2">Member since Jan 2024</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">About</h3>
              <p className="text-gray-600">Building better habits every single day. Focused on consistency and progress.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">Stats</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-violet-50 rounded-lg">Streak: <strong className="text-violet-600">12 days</strong></div>
                <div className="flex justify-between items-center p-2 bg-green-50 rounded-lg">Active Habits: <strong className="text-green-600">5</strong></div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <button className="text-violet-600 hover:text-violet-700 font-semibold">Edit Profile</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

