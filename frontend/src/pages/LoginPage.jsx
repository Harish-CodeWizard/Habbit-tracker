import Navbar from '../components/common/Navbar';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const LoginPage = () => (
	<>
		<Navbar />

		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-rose-50 px-4 py-12">
			<div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
				<div className="p-6 sm:p-8">
					<div className="flex items-start justify-between">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center">
								<span className="text-violet-600 font-bold">H</span>
							</div>
							<div>
								<h1 className="text-2xl font-bold text-gray-900">Log in to your account</h1>
								<p className="text-sm text-gray-500">Stay consistent. Build better habits.</p>
							</div>
						</div>
						<div className="hidden sm:flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Welcome back 👋</div>
					</div>

					<div className="mt-6">
						<div className="h-36 rounded-xl bg-gradient-to-r from-slate-100 to-slate-50 flex items-center justify-center overflow-hidden">
							<div className="text-sm text-gray-400">Illustration</div>
						</div>
					</div>

					<form className="mt-6 space-y-4">
						<Input label="Email" type="email" placeholder="Enter your email" />
						<Input label="Password" type="password" placeholder="Enter your password" />

						<div className="flex items-center justify-end">
							<a href="/forgot" className="text-sm text-violet-600">Forgot password?</a>
						</div>

						<div className="pt-2">
							<Button className="w-full rounded-xl py-3 bg-gradient-to-r from-slate-800 via-violet-700 to-teal-600 hover:opacity-95" variant="primary">
								Log in
							</Button>
						</div>
					</form>

					<div className="mt-6 text-center text-sm text-gray-400">or continue with</div>

					<div className="mt-3 grid grid-cols-2 gap-3">
						<button className="flex items-center justify-center gap-3 py-2 rounded-xl border border-gray-200 bg-white">
							<span className="text-sm font-medium">Google</span>
						</button>
						<button className="flex items-center justify-center gap-3 py-2 rounded-xl border border-gray-200 bg-white">
							<span className="text-sm font-medium">Apple</span>
						</button>
					</div>

					<div className="mt-6 text-center text-sm text-gray-500">Don't have an account? <a href="/signup" className="text-violet-600">Sign up</a></div>
				</div>
			</div>
		</div>
	</>
);

export default LoginPage;
