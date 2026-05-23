import MainLayout from '../components/layout/MainLayout';

export default function Profile() {
  return (
    <MainLayout>
      <div className="p-6">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center text-2xl">U</div>
            <div>
              <h2 className="text-xl font-semibold text-violet-700">User Name</h2>
              <p className="text-sm text-gray-500">user@example.com</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700">About</h3>
              <p className="text-sm text-gray-600 mt-2">This is a short bio about the user.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700">Stats</h3>
              <div className="flex gap-4 mt-2 text-sm">
                <div className="bg-violet-50 p-2 rounded">Streak: <strong>5</strong></div>
                <div className="bg-violet-50 p-2 rounded">Habits: <strong>12</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

