import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
} from "lucide-react";
import { FaGoogle, FaApple } from "react-icons/fa";

export default function SignupPage() {
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
                GET STARTED TODAY
              </p>

              <h2 className="text-5xl font-bold leading-tight tracking-tight">

                Start your
                <span className="block text-zinc-500">
                  productivity
                </span>

                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  journey.
                </span>
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mt-6 max-w-md">

                Join thousands of users building better habits
                and staying consistent every day.
              </p>
            </div>

            {/* Analytics Cards */}
            <div className="grid grid-cols-2 gap-4 mt-12">

              {/* Card 1 */}
              <div className="bg-[#18181B] border border-zinc-800 rounded-3xl p-5">

                <p className="text-zinc-500 text-sm">
                  Active Users
                </p>

                <h3 className="text-4xl font-bold mt-3">
                  25K+
                </h3>

                <p className="text-zinc-500 text-sm mt-2">
                  Worldwide
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#18181B] border border-zinc-800 rounded-3xl p-5">

                <p className="text-zinc-500 text-sm">
                  Success Rate
                </p>

                <h3 className="text-4xl font-bold mt-3">
                  94%
                </h3>

                <p className="text-zinc-500 text-sm mt-2">
                  Goal Completion
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="text-zinc-600 text-sm relative z-10">
            Free to start. Premium features available.
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
                JOIN US TODAY
              </p>

              <h2 className="text-4xl font-bold tracking-tight">
                Create account
              </h2>

              <p className="text-zinc-500 mt-4 leading-relaxed">
                Start building better habits right now.
              </p>
            </div>

            {/* Form */}
            <form className="mt-8 space-y-4">

              {/* Name */}
              <div>

                <label className="text-sm text-zinc-400 block mb-2">
                  Full Name
                </label>

                <div className="relative">

                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  />

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-[#18181B] border border-zinc-800 rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:border-blue-500 transition-all text-sm"
                  />
                </div>
              </div>

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
                    className="w-full bg-[#18181B] border border-zinc-800 rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:border-blue-500 transition-all text-sm"
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
                    placeholder="Create a password"
                    className="w-full bg-[#18181B] border border-zinc-800 rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:border-purple-500 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>

                <label className="text-sm text-zinc-400 block mb-2">
                  Confirm Password
                </label>

                <div className="relative">

                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  />

                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full bg-[#18181B] border border-zinc-800 rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:border-purple-500 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-2 text-zinc-400 text-sm mt-4">

                <input
                  type="checkbox"
                  className="accent-blue-500 mt-1"
                />

                <span>
                  I agree to the{" "}
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Privacy Policy
                  </a>
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-white text-black rounded-2xl py-3.5 font-semibold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all mt-6"
              >
                Create Account

                <ArrowRight size={18} />
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">

              <div className="flex-1 h-[1px] bg-zinc-800"></div>

              <span className="text-zinc-500 text-sm">
                OR SIGN UP WITH
              </span>

              <div className="flex-1 h-[1px] bg-zinc-800"></div>
            </div>

            {/* Social */}
            <div className="grid grid-cols-2 gap-4">

              <button className="bg-[#18181B] border border-zinc-800 rounded-2xl py-3.5 flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all">

                <FaGoogle className="text-red-500" />

                <span className="font-medium text-sm">
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
            <p className="text-center text-sm text-gray-500 mt-6">

              Already have an account?{" "}

              <Link
                to="/login"
                className="text-white hover:text-blue-400 transition"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
