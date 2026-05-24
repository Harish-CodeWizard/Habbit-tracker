import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  Eye,
  EyeOff,
  Flame,
} from "lucide-react";

import { FaGoogle } from "react-icons/fa";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#07070A] text-white overflow-x-hidden relative flex items-center justify-center p-4">

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[220px] h-[220px] bg-blue-500/10 rounded-full blur-[100px]"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[220px] h-[220px] bg-purple-500/10 rounded-full blur-[100px]"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl min-h-[90vh] bg-[#111114]/80 backdrop-blur-2xl border border-zinc-800 rounded-[28px] overflow-hidden grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-between p-8 xl:p-10 border-r border-zinc-800 relative overflow-hidden">

          {/* Inner Glow */}
          <div className="absolute top-20 left-10 w-60 h-60 bg-blue-500/10 rounded-full blur-[100px]"></div>

          <div className="relative z-10">

            {/* Logo */}
            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">

                <Flame
                  size={18}
                  className="text-white"
                />
              </div>

              <div>
                <h1 className="text-2xl font-bold">
                  HabitFlow
                </h1>

                <p className="text-zinc-500 text-sm">
                  Productivity Platform
                </p>
              </div>
            </div>

            {/* Hero */}
            <div className="mt-12">

              <p className="text-blue-400 text-xs tracking-[3px] font-semibold mb-4">

                GET STARTED
              </p>

              <h2 className="text-[52px] xl:text-[64px] font-bold leading-[0.95] tracking-tight">

                Start your

                <span className="block text-zinc-500 mt-2">
                  productivity
                </span>

                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mt-2">

                  journey.
                </span>
              </h2>

              <p className="text-zinc-400 text-base leading-relaxed mt-6 max-w-[420px]">

                Build better routines, track your
                progress, and stay consistent every
                single day with HabitFlow.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="bg-[#18181B] border border-zinc-800 rounded-3xl p-5">

                <p className="text-zinc-500 text-sm">
                  Active Users
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  25K+
                </h3>

                <p className="text-zinc-500 text-sm mt-1">
                  Worldwide
                </p>
              </div>

              <div className="bg-[#18181B] border border-zinc-800 rounded-3xl p-5">

                <p className="text-zinc-500 text-sm">
                  Success Rate
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  94%
                </h3>

                <p className="text-zinc-500 text-sm mt-1">
                  Goal Completion
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="text-zinc-600 text-sm relative z-10 mt-8">

            Free to start • Premium features available
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center px-5 sm:px-8 py-8 overflow-y-auto">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="flex lg:hidden items-center justify-center gap-3 mb-8">

              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">

                <Flame
                  size={18}
                  className="text-white"
                />
              </div>

              <h1 className="text-2xl font-bold">
                HabitFlow
              </h1>
            </div>

            {/* Header */}
            <div className="mb-7">

              <p className="text-zinc-500 text-xs tracking-[3px] mb-3">

                CREATE ACCOUNT
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">

                Join HabitFlow
              </h2>

              <p className="text-zinc-500 mt-3 text-sm sm:text-base">

                Start building better habits today.
              </p>
            </div>

            {/* Google */}
            <button className="w-full bg-white text-black rounded-2xl py-3.5 flex items-center justify-center gap-3 font-semibold hover:bg-zinc-200 transition-all duration-300">

              <FaGoogle className="text-red-500" />

              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">

              <div className="flex-1 h-[1px] bg-zinc-800"></div>

              <span className="text-zinc-500 text-sm">
                OR
              </span>

              <div className="flex-1 h-[1px] bg-zinc-800"></div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* Full Name */}
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
                    name="fullName"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-[#18181B] border border-zinc-800 rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

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
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#18181B] border border-zinc-800 rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:border-blue-500 transition-all"
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
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    placeholder="Create password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-[#18181B] border border-zinc-800 rounded-2xl pl-12 pr-12 py-3.5 outline-none focus:border-purple-500 transition-all"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
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
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={
                      formData.confirmPassword
                    }
                    onChange={handleChange}
                    className="w-full bg-[#18181B] border border-zinc-800 rounded-2xl pl-12 pr-12 py-3.5 outline-none focus:border-purple-500 transition-all"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 text-sm text-zinc-400 bg-[#18181B] border border-zinc-800 rounded-2xl p-4">

                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={
                    formData.termsAccepted
                  }
                  onChange={handleChange}
                  className="accent-blue-500 mt-1"
                />

                <span>
                  I agree to the{" "}

                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Terms
                  </a>{" "}

                  and{" "}

                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full rounded-2xl py-3.5 font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  isLoading
                    ? "bg-zinc-700 text-zinc-400"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
                }`}
              >
                {isLoading ? (
                  "Creating Account..."
                ) : (
                  <>
                    Create Account

                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-zinc-500 text-sm mt-6">

              Already have an account?{" "}

              <Link
                to="/login"
                className="text-white hover:text-blue-400 transition font-medium"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}