import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";
import { FaGoogle, FaApple } from "react-icons/fa";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#F6F7F5] flex items-center justify-center px-4 overflow-hidden relative">

      {/* Background Blurs */}
      <div className="absolute top-[-120px] left-[-120px] w-72 h-72 bg-[#DDEEE9] rounded-full blur-3xl opacity-50"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-80 h-80 bg-[#E7F2EE] rounded-full blur-3xl opacity-50"></div>

      {/* Main Card */}
      <div className="relative w-full max-w-md bg-white border border-[#EEF2F0] rounded-[36px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] overflow-hidden">

        {/* Top Section */}
        <div className="bg-[#23352F] px-6 pt-10 pb-24 relative">

          {/* Floating Badge */}
          <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">

            <p className="text-white text-xs font-medium">
              Welcome Back 👋
            </p>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight">
            Log in to your account
          </h1>

          <p className="text-white/70 mt-3 text-sm leading-relaxed">
            Build consistency and stay productive every day.
          </p>

          {/* Floating Analytics Card */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 w-[88%] bg-white rounded-3xl shadow-2xl border border-[#EEF2F0] p-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-400">
                  Today's Progress
                </p>

                <h2 className="text-3xl font-bold text-[#23352F] mt-1">
                  82%
                </h2>
              </div>

              {/* Circle */}
              <div className="relative w-16 h-16">

                <div className="absolute inset-0 rounded-full border-[6px] border-[#DDEEE9]"></div>

                <div className="absolute inset-0 rounded-full border-[6px] border-transparent border-t-[#23352F] border-r-[#23352F] rotate-45"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="px-6 pt-20 pb-8">

          <form className="space-y-5">

            {/* Email */}
            <div>

              <label className="block text-sm font-medium text-gray-600 mb-2">
                Email
              </label>

              <div className="relative">

                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#F8F8F8] border border-transparent focus:border-[#23352F] focus:ring-4 focus:ring-[#23352F]/10 outline-none rounded-2xl pl-12 pr-4 py-3.5 text-sm transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>

              <label className="block text-sm font-medium text-gray-600 mb-2">
                Password
              </label>

              <div className="relative">

                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-[#F8F8F8] border border-transparent focus:border-[#23352F] focus:ring-4 focus:ring-[#23352F]/10 outline-none rounded-2xl pl-12 pr-4 py-3.5 text-sm transition-all"
                />
              </div>
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-gray-500">

                <input
                  type="checkbox"
                  className="accent-[#23352F]"
                />

                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-[#23352F] font-semibold"
              >
                Forgot?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#23352F] text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Sign In

              <ArrowRight size={18} />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 py-6">

            <div className="flex-1 h-[1px] bg-gray-200"></div>

            <span className="text-xs text-gray-400">
              OR CONTINUE WITH
            </span>

            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4">

            <button className="bg-white border border-[#EEF2F0] py-3.5 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-50 transition">

              <FaGoogle className="text-red-500" />

              <span className="text-sm font-medium text-gray-700">
                Google
              </span>
            </button>

            <button className="bg-white border border-[#EEF2F0] py-3.5 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-50 transition">

              <FaApple />

              <span className="text-sm font-medium text-gray-700">
                Apple
              </span>
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-8">

            Don’t have an account?{" "}

            <Link
              to="/signup"
              className="text-[#23352F] font-bold"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}