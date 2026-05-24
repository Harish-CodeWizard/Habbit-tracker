import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  Flame,
} from "lucide-react";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="h-screen overflow-hidden bg-[#07070A] text-white relative flex items-center justify-center px-4">

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[260px] h-[260px] bg-blue-500/10 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[260px] h-[260px] bg-purple-500/10 rounded-full blur-[120px]"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl h-[92vh] bg-[#111114]/80 backdrop-blur-2xl border border-zinc-800 rounded-[30px] overflow-hidden grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-between p-10 border-r border-zinc-800 overflow-hidden">

          {/* Top */}
          <div>

            {/* Logo */}
            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">

                <Flame size={20} className="text-white" />
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

              <p className="text-blue-400 text-xs font-semibold tracking-[3px] mb-4">
                WELCOME BACK
              </p>

              <h2 className="text-5xl xl:text-6xl font-bold leading-[1.05] tracking-tight">

                Stay focused.

                <span className="block text-zinc-500">
                  Build better
                </span>

                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  habits daily.
                </span>
              </h2>

              <p className="text-zinc-400 text-base xl:text-lg leading-relaxed mt-5 max-w-md">

                Track routines, improve consistency,
                and achieve your goals with a modern
                productivity system.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-2 gap-4 mt-10">

              {/* Card 1 */}
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

              {/* Card 2 */}
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

          {/* Footer */}
          <p className="text-zinc-600 text-sm">
            Trusted by 25,000+ users worldwide.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center px-5 sm:px-8 lg:px-12 py-6 overflow-y-auto">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="flex lg:hidden items-center justify-center gap-3 mb-8">

              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">

                <Flame size={18} className="text-white" />
              </div>

              <h1 className="text-2xl font-bold">
                HabitFlow
              </h1>
            </div>

            {/* Header */}
            <div className="mb-7">

              <p className="text-zinc-500 text-xs tracking-[3px] mb-3">
                SIGN IN
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Welcome back
              </h2>

              <p className="text-zinc-500 mt-3 text-sm sm:text-base">
                Continue your productivity journey.
              </p>
            </div>

            {/* Google Button */}
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
            <form onSubmit={handleSubmit} className="space-y-4">

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
                    className={`w-full bg-[#18181B] border rounded-2xl pl-12 pr-4 py-3.5 outline-none transition-all ${
                      errors.email
                        ? "border-red-500"
                        : "border-zinc-800 focus:border-blue-500"
                    }`}
                  />
                </div>

                {errors.email && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.email}
                  </p>
                )}
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
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full bg-[#18181B] border rounded-2xl pl-12 pr-12 py-3.5 outline-none transition-all ${
                      errors.password
                        ? "border-red-500"
                        : "border-zinc-800 focus:border-purple-500"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember */}
              <div className="flex items-center justify-between text-sm pt-1">

                <label className="flex items-center gap-2 text-zinc-500 cursor-pointer">

                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="accent-blue-500"
                  />

                  Remember me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full rounded-2xl py-3.5 font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  isLoading
                    ? "bg-zinc-700 text-zinc-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
                }`}
              >
                {isLoading ? (
                  "Signing In..."
                ) : (
                  <>
                    Sign In
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-zinc-500 text-sm mt-6">

              Don’t have an account?{" "}

              <Link
                to="/signup"
                className="text-white hover:text-blue-400 transition font-medium"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}