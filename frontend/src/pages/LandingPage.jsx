import Navbar from '../components/common/Navbar';
import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaApple } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#F4F4F2] flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-sm bg-white rounded-[32px] shadow-xl overflow-hidden">
        
        {/* Top Section */}
        <div className="bg-gradient-to-br from-[#1F3A36] via-[#345B56] to-[#4C7B74] px-6 pt-10 pb-20 relative">
          <div className="absolute top-6 right-6 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>

          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-white/80 mt-2 text-sm">
            Continue building your habits and stay productive.
          </p>

          {/* Floating Card */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[88%] bg-white rounded-3xl shadow-2xl p-5">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-sm">Today's Progress</p>
                <h2 className="text-2xl font-bold text-[#1F3A36] mt-1">
                  82%
                </h2>
              </div>

              <div className="w-16 h-16 rounded-full border-[6px] border-[#DDEEE9] border-t-[#1F3A36] rotate-45"></div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="px-6 pt-16 pb-8">
          <form className="space-y-4">

            {/* Email */}
            <div>
              <label className="text-sm text-gray-500 mb-2 block">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#F7F7F7] border border-transparent focus:border-[#1F3A36] focus:ring-2 focus:ring-[#1F3A36]/20 outline-none rounded-2xl px-4 py-3 text-sm transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-500 mb-2 block">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-[#F7F7F7] border border-transparent focus:border-[#1F3A36] focus:ring-2 focus:ring-[#1F3A36]/20 outline-none rounded-2xl px-4 py-3 text-sm transition"
              />
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-500">
                <input type="checkbox" className="accent-[#1F3A36]" />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-[#1F3A36] font-medium"
              >
                Forgot?
              </Link>
            </div>

            {/* Login Button */}
            <button className="w-full bg-[#1F3A36] hover:bg-[#16302C] text-white rounded-2xl py-3 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Sign In
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 py-2">
              <div className="flex-1 h-[1px] bg-gray-200"></div>
              <span className="text-xs text-gray-400">
                OR CONTINUE WITH
              </span>
              <div className="flex-1 h-[1px] bg-gray-200"></div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-gray-200 rounded-2xl py-3 hover:bg-gray-50 transition"
              >
                <FaGoogle className="text-red-500" />
                <span className="text-sm font-medium">Google</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-gray-200 rounded-2xl py-3 hover:bg-gray-50 transition"
              >
                <FaApple />
                <span className="text-sm font-medium">Apple</span>
              </button>
            </div>

            {/* Signup */}
            <p className="text-center text-sm text-gray-500 pt-4">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-[#1F3A36] font-semibold"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;