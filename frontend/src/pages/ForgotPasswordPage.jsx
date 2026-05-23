import Navbar from '../components/common/Navbar';

const ForgotPasswordPage = () => (
  <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 to-white px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm border">
        <h2 className="text-xl font-semibold text-violet-700 mb-2">Reset password</h2>
        <p className="text-sm text-gray-500 mb-4">Enter your email and we'll send reset instructions.</p>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-gray-300" />
          <button className="w-full py-3 rounded-xl bg-violet-600 text-white">Send reset link</button>
        </form>
      </div>
    </div>
  </>
);

export default ForgotPasswordPage;
