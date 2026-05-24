import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Flame,
  CheckCircle2,
  Calendar,
  TrendingUp,
  Zap,
  Target,
  Trophy,
  Sparkles,
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white overflow-x-hidden relative">

      {/* Background Effects */}
      <div className="absolute top-[-150px] left-[-100px] w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-100px] w-[350px] h-[350px] bg-purple-500/10 blur-[140px] rounded-full"></div>

      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between relative z-10">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">

            <Flame size={22} className="text-white" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight">
            HabitFlow
          </h1>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">

          <Link
            to="/login"
            className="text-zinc-400 hover:text-white transition duration-300 text-sm sm:text-base"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-white text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl font-semibold hover:bg-zinc-200 transition duration-300 shadow-lg text-sm sm:text-base"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 lg:pt-16 pb-16">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl px-4 py-2 rounded-full mb-6">

              <Flame size={16} className="text-orange-400" />

              <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                Trusted by 25,000+ users
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5">

              Build habits

              <span className="block text-zinc-500">
                with clarity &
              </span>

              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                consistency.
              </span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-lg mb-8">

              A modern productivity platform designed to help you
              track habits, stay focused, and visualize progress
              with clean analytics and powerful routines.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">

              <Link
                to="/signup"
                className="bg-white text-black px-6 py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all duration-300 shadow-lg"
              >
                Start for free
                <ArrowRight size={18} />
              </Link>

              <button className="border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl px-6 py-3 rounded-2xl font-medium hover:bg-zinc-800 transition duration-300">
                Live Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">

              <div className="border-l-2 border-blue-500 pl-3">
                <h3 className="text-2xl sm:text-3xl font-bold mb-1">
                  82%
                </h3>

                <p className="text-zinc-500 text-xs sm:text-sm font-medium">
                  Productivity Gain
                </p>
              </div>

              <div className="border-l-2 border-purple-500 pl-3">
                <h3 className="text-2xl sm:text-3xl font-bold mb-1">
                  12K+
                </h3>

                <p className="text-zinc-500 text-xs sm:text-sm font-medium">
                  Active Users
                </p>
              </div>

              <div className="border-l-2 border-orange-500 pl-3">
                <h3 className="text-2xl sm:text-3xl font-bold mb-1">
                  4.9★
                </h3>

                <p className="text-zinc-500 text-xs sm:text-sm font-medium">
                  User Rating
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center mt-8 lg:mt-0">

            {/* Main Dashboard */}
            <div className="relative w-full max-w-[100%] sm:max-w-[500px] bg-zinc-900/70 backdrop-blur-2xl border border-zinc-800 rounded-[28px] p-4 sm:p-6 shadow-[0_0_80px_rgba(59,130,246,0.08)]">

              {/* Top Bar */}
              <div className="flex items-center justify-between mb-6">

                <div>
                  <p className="text-zinc-500 text-sm font-medium">
                    Daily Progress
                  </p>

                  <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                    80%
                  </h2>
                </div>

                <div className="w-14 h-14 rounded-full border-[5px] border-zinc-700 border-t-blue-500 border-r-purple-500 rotate-45"></div>
              </div>

              {/* Task Cards */}
              <div className="space-y-4">

                {[
                  "Morning Workout",
                  "Deep Work Session",
                  "Read 20 Pages",
                  "Meditation",
                ].map((task, index) => (
                  <div
                    key={index}
                    className="bg-[#111114] border border-zinc-800 rounded-2xl p-4 flex items-center justify-between"
                  >

                    <div className="flex items-center gap-3 min-w-0">

                      <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center flex-shrink-0">

                        <CheckCircle2
                          size={18}
                          className="text-blue-400"
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-medium text-sm sm:text-base truncate">
                          {task}
                        </h3>

                        <p className="text-zinc-500 text-xs sm:text-sm mt-1">
                          07:00 AM
                        </p>
                      </div>
                    </div>

                    <button className="bg-zinc-800 px-4 py-2 rounded-xl text-xs sm:text-sm hover:bg-zinc-700 transition duration-300 font-medium">
                      Done
                    </button>
                  </div>
                ))}
              </div>

              {/* Analytics */}
              <div className="grid grid-cols-2 gap-4 mt-5">

                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-zinc-800 rounded-2xl p-5">

                  <BarChart3
                    size={22}
                    className="text-blue-400"
                  />

                  <h3 className="text-2xl font-bold mt-4">
                    12
                  </h3>

                  <p className="text-zinc-400 text-sm mt-1 font-medium">
                    Day Streak
                  </p>
                </div>

                <div className="bg-[#111114] border border-zinc-800 rounded-2xl p-5">

                  <Calendar
                    size={22}
                    className="text-purple-400"
                  />

                  <div className="flex items-end gap-2 h-16 mt-4">

                    <div className="w-3 h-10 rounded-full bg-zinc-700"></div>
                    <div className="w-3 h-14 rounded-full bg-blue-500"></div>
                    <div className="w-3 h-12 rounded-full bg-zinc-700"></div>
                    <div className="w-3 h-16 rounded-full bg-purple-500"></div>
                    <div className="w-3 h-10 rounded-full bg-zinc-700"></div>

                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute right-0 top-10 bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-4 shadow-2xl hidden md:block">

              <div className="flex items-center gap-2 mb-3">
                <Zap size={16} className="text-orange-400" />

                <p className="text-zinc-500 text-xs font-medium">
                  Focus Score
                </p>
              </div>

              <h3 className="text-3xl font-bold">
                92%
              </h3>

              <div className="w-32 h-2 bg-zinc-800 rounded-full mt-4 overflow-hidden">

                <div className="w-[92%] h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 pb-20">

        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl px-4 py-2 rounded-full mb-5">

            <Sparkles size={16} className="text-purple-400" />

            <span className="text-sm text-zinc-300 font-medium">
              Features
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Designed for modern productivity
          </h2>

          <p className="text-zinc-500 text-base sm:text-lg max-w-2xl mx-auto">
            Everything you need to build strong routines and achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">

          {[
            {
              title: "Powerful Analytics",
              desc: "Track performance with clean visual insights and detailed progress reports.",
              icon: TrendingUp,
              color: "from-blue-500 to-cyan-500",
            },
            {
              title: "Habit Streaks",
              desc: "Stay motivated with streak systems, goals, and achievement celebrations.",
              icon: Trophy,
              color: "from-purple-500 to-pink-500",
            },
            {
              title: "Focus Sessions",
              desc: "Improve concentration and build deep work routines with smart tracking.",
              icon: Target,
              color: "from-orange-500 to-red-500",
            },
          ].map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-[28px] p-6 hover:border-zinc-700 transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]"
              >

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>

                  <Icon size={26} className="text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-zinc-500 leading-relaxed text-sm sm:text-base">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;