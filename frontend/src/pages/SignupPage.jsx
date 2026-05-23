import React from 'react';
import Navbar from '../components/common/Navbar';

const SignupPage = () => (
	<>
		<Navbar />
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-rose-50 px-4 py-12">
			<div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
				<div className="p-6 sm:p-8">
					<div className="text-center mb-6">
						<h1 className="text-2xl font-bold text-gray-900">Create account</h1>
						<p className="text-gray-500 mt-2 text-sm">Start building better habits.</p>
					</div>

					<form className="space-y-4">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
							<input className="w-full px-4 py-3 rounded-xl border border-gray-300" />
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
							<input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300" />
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
							<input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-300" />
						</div>
						<button className="w-full py-3 rounded-xl bg-gradient-to-r from-slate-800 via-violet-700 to-teal-600 text-white font-semibold">Sign up</button>
					</form>

					<div className="mt-6 text-center text-sm text-gray-500">Already have an account? <a href="/login" className="text-violet-600">Login</a></div>
				</div>
			</div>
		</div>
	</>
);

export default SignupPage;
