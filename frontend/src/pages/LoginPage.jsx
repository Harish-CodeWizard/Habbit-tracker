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
    <div className="min-h-screen bg-[#0B0B0F] text-white overflow-hidden relative flex items-center justify-center px-4">

      {/* Background Glow */}
      <div className="absolute top-[-150px] left-[-100px] w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-purple-500/10 blur-[140px] rounded-full"></div>

      {/* Main Container */}
      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-[#111114]/80 backdrop-blur-2xl border border-zinc-800 rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(59,130,246,0.08)]">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-between p-10 border-r border-zinc-800 relative overflow-hidden">

          {/* Blur */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

          {/* Logo */}
          <div className="relative z-10">

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">

                <span className="font-bold text-lg">H</span>
              </div>

              <div>
                <h1 className="text-xl font-bold">
                  HabitFlow
                </h1>

                <p className="text-zinc-500 text-sm">
                  Productivity Platform
                </p>
              </div>
            </div>

            {/* Heading */}
            <div className="mt-20">

              <h2 className="text-5xl font-bold leading-tight">

                Stay focused.
                <span className="block text-zinc-500">
                  Build consistency.
                </span>
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mt-6 max-w-md">

                Track habits, improve productivity,
                and visualize your growth with a
                clean modern experience.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-12">

              <div className="bg-[#18181B] border border-zinc-800 rounded-3xl p-5">

                <p className="text-zinc-500 text-sm">
                  Productivity
                </p>

                <h3 className="text-4xl font-bold mt-3">
                  82%
                </h3>

                <div className="w-full h-2 bg-zinc-800 rounded-full mt-5 overflow-hidden">

                  <div className="w-[82%] h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>

              <div className="bg-[#18181B] border border-zinc-800 rounded-3xl p-5">

                <p className="text-zinc-500 text-sm">
                  Habit Streak
                </p>

                <h3 className="text-4xl font-bold mt-3">
                  12
                </h3>

                <p className="text-zinc-500 text-sm mt-2">
                  Days Consistent
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <p className="text-zinc-600 text-sm relative z-10">
            Trusted by 25,000+ users worldwide.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 sm:p-10 flex flex-col justify-center">

          {/* Mobile Logo */}
          <div className="flex lg:hidden items-center gap-3 mb-10">

            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">

              <span className="font-bold">H</span>
            </div>

            <h1 className="text-xl font-bold">
              HabitFlow
            </h1>
          </div>

          {/* Header */}
          <div>

            <p className="text-zinc-500 text-sm mb-3">
              WELCOME BACK
            </p>

            <h2 className="text-4xl font-bold">
              Sign in to continue
            </h2>

            <p className="text-zinc-500 mt-4 leading-relaxed">
              Access your dashboard and continue building better habits.
            </p>
          </div>

          {/* Form */}
          <form className="mt-10 space-y-5">

            {/* Email */}
            <div>

              <label className="text-sm text-zinc-400 block mb-2">
                Email
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

            {/* Password */}
            <div>

              <label className="text-sm text-zinc-400 block mb-2">
                Password
              </label>

              <div className="relative">

                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-[#18181B] border border-zinc-800 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-purple-500 transition-all"
                />
              </div>
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-zinc-500">

                <input
                  type="checkbox"
                  className="accent-blue-500"
                />

                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                Forgot password?
              </Link>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-white text-black rounded-2xl py-4 font-semibold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all"
            >
              Sign In

              <ArrowRight size={18} />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">

            <div className="flex-1 h-[1px] bg-zinc-800"></div>

            <span className="text-zinc-500 text-sm">
              OR CONTINUE WITH
            </span>

            <div className="flex-1 h-[1px] bg-zinc-800"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">

            <button className="bg-[#18181B] border border-zinc-800 rounded-2xl py-4 flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all">

              <FaGoogle className="text-red-500" />

              <span className="font-medium">
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
              className="text-white hover:text-blue-400 transition"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}