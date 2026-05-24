import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  ArrowRight,
} from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#0B0B0F] text-white flex items-center justify-center px-4 relative">

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-blue-500/10 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-purple-500/10 rounded-full blur-[120px]"></div>

      {/* Main Container */}
      <div className="w-full max-w-6xl h-[92vh] bg-[#111114]/80 backdrop-blur-2xl border border-zinc-800 rounded-[36px] overflow-hidden grid lg:grid-cols-2 shadow-[0_0_80px_rgba(59,130,246,0.08)]">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-between p-10 border-r border-zinc-800 relative overflow-hidden">

          {/* Glow */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

          {/* Top */}
          <div className="relative z-10">

            {/* Logo */}
            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">

                <span className="font-bold text-lg">
                  H
                </span>
              </div>

              <div>
                <h1 className="text-xl font-bold tracking-tight">
                  HabitFlow
                </h1>

                <p className="text-zinc-500 text-sm">
                  Productivity Platform
                </p>
              </div>
            </div>

            {/* Hero Text */}
            <div className="mt-20">

              <p className="text-blue-400 text-sm font-medium mb-4">
                ACCOUNT RECOVERY
              </p>

              <h2 className="text-5xl font-bold leading-tight tracking-tight">

                Reset your
                <span className="block text-zinc-500">
                  password
                </span>

                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  securely.
                </span>
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mt-6 max-w-md">

                Enter your email address and we'll send you
                a link to reset your password.
              </p>
            </div>

            {/* Security Info */}
            <div className="bg-[#18181B] border border-zinc-800 rounded-3xl p-6 mt-12">

              <p className="text-sm text-zinc-400 mb-4">
                🔒 <span className="font-semibold">Your account is safe</span>
              </p>

              <p className="text-sm text-zinc-500">
                We'll never share your password. You'll receive a secure reset link via email.
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-zinc-600 text-sm relative z-10">
            Your security is our priority.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center px-6 sm:px-10 py-8 overflow-hidden">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="flex lg:hidden items-center gap-3 mb-10">

              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">

                <span className="font-bold">
                  H
                </span>
              </div>

              <h1 className="text-xl font-bold">
                HabitFlow
              </h1>
            </div>

            {/* Header */}
            <div>

              <p className="text-zinc-500 text-sm mb-3">
                FORGOT PASSWORD?
              </p>

              <h2 className="text-4xl font-bold tracking-tight">
                Reset password
              </h2>

              <p className="text-zinc-500 mt-4 leading-relaxed">
                We'll send a reset link to your email address.
              </p>
            </div>

            {/* Form */}
            <form className="mt-10 space-y-6">

              {/* Email */}
              <div>

                <label className="text-sm text-zinc-400 block mb-2">
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-[#18181B] border border-zinc-800 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-white text-black rounded-2xl py-4 font-semibold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all"
              >
                Send Reset Link

                <ArrowRight size={18} />
              </button>

              {/* Info */}
              <div className="bg-[#18181B] border border-zinc-800 rounded-2xl p-4">

                <p className="text-sm text-zinc-400">
                  💡 <span className="font-medium">Tip:</span> Check your spam folder if you don't see the email.
                </p>
              </div>
            </form>

            {/* Back to Login */}
            <div className="mt-8 text-center">

              <p className="text-sm text-zinc-500 mb-4">
                Remember your password?
              </p>

              <Link
                to="/login"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition font-medium"
              >
                Back to Sign In

                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
