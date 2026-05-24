import Navbar from '../components/common/Navbar';

const ForgotPasswordPage = () => (
  <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-rose-50 px-4 py-12">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Reset password</h1>
        <p className="text-gray-600 mb-6">Enter your email and we'll send you reset instructions.</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-200 focus:border-violet-500" />
          </div>
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-slate-800 via-violet-700 to-teal-600 text-white font-semibold hover:opacity-95">Send reset link</button>
        </form>
      </div>
    </div>
  </>
);

export default ForgotPasswordPage;
