export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-100 via-white to-violet-200 px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 border border-violet-100">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-violet-700">
            Habit Tracker
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Build consistency. Track your progress.
          </p>
        </div>
        {/* Login Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-violet-500" /> Remember me
            </label>
            <a href="/forgot-password" className="text-violet-600 hover:underline">Forgot?</a>
          </div>
          <button type="submit" className="w-full py-3 rounded-xl bg-violet-600 text-white font-semibold shadow-lg hover:bg-violet-700 transition">
            Login
          </button>
        </form>
        {/* Social Login */}
        <div className="mt-8 flex flex-col gap-2">
          <button className="w-full py-2 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition">
            <span>Continue with Google</span>
          </button>
          <button className="w-full py-2 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition">
            <span>Continue with Apple</span>
          </button>
        </div>
        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Don’t have an account? <a href="/signup" className="text-violet-600 hover:underline">Sign up</a>
        </div>
      </div>
    </div>
  );
}
