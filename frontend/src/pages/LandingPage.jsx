import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Zap,
  Calendar,
  Flame,
  ShieldCheck,
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#F4F4F2] overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-[-120px] left-[-120px] w-72 h-72 bg-[#CDE4DE] rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-80 h-80 bg-[#DDEEE9] rounded-full blur-3xl opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-5 py-6">

        {/* Navbar */}
        <nav className="flex items-center justify-between mb-12">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#1F3A36] to-[#4C7B74] flex items-center justify-center shadow-lg">

              <span className="text-white font-bold text-lg">
                H
              </span>
            </div>

            <div>
              <h1 className="font-bold text-[#1F3A36] text-lg">
                HabitFlow
              </h1>

              <p className="text-xs text-gray-500">
                Build consistency
              </p>
            </div>
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center gap-3">

            <Link
              to="/login"
              className="text-sm text-[#1F3A36] font-medium"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-[#1F3A36] text-white px-5 py-2.5 rounded-2xl text-sm font-medium shadow-lg hover:scale-105 transition"
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-8">

          {/* Left Content */}
          <div>

            <div className="inline-flex items-center gap-2 bg-white border border-[#DDEEE9] rounded-full px-4 py-2 shadow-sm mb-6">

              <Flame className="text-orange-500" size={16} />

              <span className="text-sm text-gray-600">
                Trusted by 10K+ productive users
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-[#1F2937]">

              Build Habits
              <span className="block text-[#1F3A36]">
                That Actually Stick
              </span>
            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-relaxed max-w-xl">

              Track your routines, stay consistent, and improve daily
              with a beautiful habit tracking experience designed for
              productivity and focus.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <Link
                to="/signup"
                className="bg-gradient-to-r from-[#132D28] to-[#3C6E67] text-white px-7 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] transition-all"
              >
                Start Free
                <ArrowRight size={18} />
              </Link>

              <button className="bg-white border border-gray-200 px-7 py-4 rounded-2xl font-medium text-gray-700 hover:bg-gray-50 transition">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-10">

              <div>
                <h3 className="text-2xl font-bold text-[#1F3A36]">
                  95%
                </h3>

                <p className="text-sm text-gray-500">
                  Success Rate
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1F3A36]">
                  50K+
                </h3>

                <p className="text-sm text-gray-500">
                  Habits Tracked
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1F3A36]">
                  4.9★
                </h3>

                <p className="text-sm text-gray-500">
                  App Rating
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Dashboard Mockup */}
          <div className="relative flex justify-center">

            {/* Main Card */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[32px] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.08)] w-full max-w-md">

              {/* Top */}
              <div className="flex items-center justify-between mb-6">

                <div>
                  <p className="text-sm text-gray-400">
                    Today's Progress
                  </p>

                  <h2 className="text-3xl font-bold text-[#1F3A36]">
                    82%
                  </h2>
                </div>

                <div className="w-16 h-16 rounded-full border-[6px] border-[#DDEEE9] border-t-[#1F3A36] border-r-[#1F3A36] rotate-45"></div>
              </div>

              {/* Habit Cards */}
              <div className="space-y-4">

                {[
                  {
                    title: "Morning Workout",
                    time: "07:00 AM",
                    done: true,
                  },
                  {
                    title: "Read 20 Pages",
                    time: "09:00 PM",
                    done: true,
                  },
                  {
                    title: "Meditation",
                    time: "08:00 PM",
                    done: false,
                  },
                ].map((habit, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-4 border border-gray-100 flex items-center justify-between shadow-sm"
                  >

                    <div>
                      <h3 className="font-semibold text-[#1F2937]">
                        {habit.title}
                      </h3>

                      <p className="text-sm text-gray-400">
                        {habit.time}
                      </p>
                    </div>

                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        habit.done
                          ? "bg-[#DDEEE9]"
                          : "bg-gray-100"
                      }`}
                    >
                      <CheckCircle2
                        size={20}
                        className={
                          habit.done
                            ? "text-[#1F3A36]"
                            : "text-gray-400"
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Cards */}
              <div className="grid grid-cols-2 gap-4 mt-5">

                <div className="bg-gradient-to-br from-[#1F3A36] to-[#4C7B74] rounded-2xl p-4 text-white">

                  <TrendingUp size={22} className="mb-3" />

                  <h4 className="font-semibold">
                    12 Day Streak
                  </h4>

                  <p className="text-sm text-white/70 mt-1">
                    Keep going strong
                  </p>
                </div>

                <div className="bg-[#F8F8F8] rounded-2xl p-4">

                  <Calendar
                    size={22}
                    className="mb-3 text-[#1F3A36]"
                  />

                  <h4 className="font-semibold text-[#1F2937]">
                    Smart Calendar
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Visual habit tracking
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-5 -right-3 bg-white rounded-2xl shadow-xl px-4 py-3 border border-gray-100 flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-[#DDEEE9] flex items-center justify-center">

                <ShieldCheck
                  size={20}
                  className="text-[#1F3A36]"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#1F2937]">
                  Daily Consistency
                </p>

                <p className="text-xs text-gray-500">
                  +24% this week
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mt-24">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-[#1F2937]">
              Everything You Need
            </h2>

            <p className="text-gray-500 mt-4">
              Simple tools to build powerful routines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {[
              {
                icon: <CheckCircle2 size={28} />,
                title: "Habit Tracking",
                desc: "Track daily habits effortlessly with beautiful UI.",
              },
              {
                icon: <TrendingUp size={28} />,
                title: "Analytics",
                desc: "Visualize progress with insights and charts.",
              },
              {
                icon: <Zap size={28} />,
                title: "Motivation",
                desc: "Stay consistent with streaks and achievements.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-7 shadow-lg hover:-translate-y-1 transition-all"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#DDEEE9] flex items-center justify-center text-[#1F3A36] mb-5">

                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-[#1F2937] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24">

          <div className="bg-gradient-to-r from-[#132D28] to-[#3C6E67] rounded-[36px] p-10 text-center text-white shadow-2xl">

            <h2 className="text-4xl font-bold">
              Ready to transform your habits?
            </h2>

            <p className="text-white/70 mt-4 text-lg">
              Join thousands building better routines every day.
            </p>

            <Link
              to="/signup"
              className="inline-flex items-center gap-2 bg-white text-[#1F3A36] px-8 py-4 rounded-2xl font-semibold mt-8 hover:scale-105 transition-all"
            >
              Get Started Free
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;