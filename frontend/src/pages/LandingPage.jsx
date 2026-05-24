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
  Users,
  Sparkles,
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-100px] w-[450px] h-[450px] bg-purple-500/10 blur-[140px] rounded-full"></div>

      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between relative z-10 border-b border-zinc-800/30">

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0">

            <Flame size={24} className="text-white" />
          </div>

          <h1 className="text-xl sm:text-2xl font-bold tracking-tight hidden sm:block">
            HabitFlow
          </h1>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">

          <Link
            to="/login"
            className="text-zinc-400 hover:text-white transition duration-300 text-sm sm:text-base"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-white text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold hover:bg-zinc-200 transition duration-300 shadow-lg text-sm sm:text-base whitespace-nowrap"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 lg:pt-40 pb-20">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-3 border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl px-5 py-3 rounded-full mb-10">

              <Flame size={18} className="text-orange-400" />

              <span className="text-sm text-zinc-300 font-medium">
                Trusted by 25,000+ users
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">

              Build habits
              <span className="block text-zinc-500">
                with clarity &
              </span>

              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                consistency.
              </span>
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-10">

              A modern productivity platform designed to help you
              track habits, stay focused, and visualize progress
              with clean analytics and powerful routines.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mb-16">

              <Link
                to="/signup"
                className="bg-white text-black px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all duration-300 shadow-lg"
              >
                Start for free
                <ArrowRight size={20} />
              </Link>

              <button className="border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl px-8 py-4 rounded-2xl font-medium hover:bg-zinc-800 transition duration-300">
                Live Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">

              <div className="border-l-2 border-blue-500 pl-4">
                <h3 className="text-4xl font-bold mb-2">82%</h3>

                <p className="text-zinc-500 text-sm font-medium">
                  Productivity Gain
                </p>
              </div>

              <div className="border-l-2 border-purple-500 pl-4">
                <h3 className="text-4xl font-bold mb-2">12K+</h3>

                <p className="text-zinc-500 text-sm font-medium">
                  Active Users
                </p>
              </div>

              <div className="border-l-2 border-orange-500 pl-4">
                <h3 className="text-4xl font-bold mb-2">4.9★</h3>

                <p className="text-zinc-500 text-sm font-medium">
                  User Rating
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">

            {/* Main Dashboard */}
            <div className="relative w-full max-w-[500px] bg-zinc-900/70 backdrop-blur-2xl border border-zinc-800 rounded-[36px] p-6 shadow-[0_0_80px_rgba(59,130,246,0.08)]">

              {/* Top Bar */}
              <div className="flex items-center justify-between mb-8">

                <div>
                  <p className="text-zinc-500 text-sm font-medium">
                    Daily Progress
                  </p>

                  <h2 className="text-4xl font-bold mt-3">
                    80%
                  </h2>
                </div>

                <div className="w-16 h-16 rounded-full border-[6px] border-zinc-700 border-t-blue-500 border-r-purple-500 rotate-45"></div>
              </div>

              {/* Task Cards */}
              <div className="space-y-5">

                {[
                  "Morning Workout",
                  "Deep Work Session",
                  "Read 20 Pages",
                  "Meditation",
                ].map((task, index) => (
                  <div
                    key={index}
                    className="bg-[#111114] border border-zinc-800 rounded-3xl p-5 flex items-center justify-between hover:border-zinc-700 transition duration-300"
                  >

                    <div className="flex items-center gap-5">

                      <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center flex-shrink-0">

                        <CheckCircle2
                          size={20}
                          className="text-blue-400"
                        />
                      </div>

                      <div>
                        <h3 className="font-medium text-base">
                          {task}
                        </h3>

                        <p className="text-zinc-500 text-sm mt-1">
                          07:00 AM
                        </p>
                      </div>
                    </div>

                    <button className="bg-zinc-800 px-5 py-2 rounded-xl text-sm hover:bg-zinc-700 transition duration-300 font-medium">
                      Done
                    </button>
                  </div>
                ))}
              </div>

              {/* Analytics */}
              <div className="grid grid-cols-2 gap-5 mt-6">

                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-zinc-800 rounded-3xl p-6 hover:border-blue-500/50 transition duration-300">

                  <BarChart3
                    size={24}
                    className="text-blue-400"
                  />

                  <h3 className="text-3xl font-bold mt-6">
                    12
                  </h3>

                  <p className="text-zinc-400 text-sm mt-2 font-medium">
                    Day Streak
                  </p>
                </div>

                <div className="bg-[#111114] border border-zinc-800 rounded-3xl p-6 hover:border-purple-500/50 transition duration-300">

                  <Calendar
                    size={24}
                    className="text-purple-400"
                  />

                  <div className="flex items-end gap-2 h-20 mt-6">

                    <div className="w-3 h-10 rounded-full bg-zinc-700"></div>

                    <div className="w-3 h-16 rounded-full bg-blue-500"></div>

                    <div className="w-3 h-12 rounded-full bg-zinc-700"></div>

                    <div className="w-3 h-20 rounded-full bg-purple-500"></div>

                    <div className="w-3 h-14 rounded-full bg-zinc-700"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -right-12 top-24 bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 shadow-2xl hidden lg:block hover:border-orange-500/50 transition duration-300">

              <div className="flex items-center gap-3 mb-4">
                <Zap size={18} className="text-orange-400" />
                <p className="text-zinc-500 text-sm font-medium">
                  Focus Score
                </p>
              </div>

              <h3 className="text-4xl font-bold">
                92%
              </h3>

              <div className="w-40 h-2 bg-zinc-800 rounded-full mt-6 overflow-hidden">

                <div className="w-[92%] h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 mt-40 pb-32">

        <div className="text-center mb-20">

          <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl px-4 py-2 rounded-full mb-6">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm text-zinc-300 font-medium">Features</span>
          </div>

          <h2 className="text-5xl font-bold mb-6">
            Designed for modern productivity
          </h2>

          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Everything you need to build strong routines and achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

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
                className="group bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-[32px] p-8 hover:border-zinc-700 transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]"
              >

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} className="text-white" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {feature.title}
                </h3>

                <p className="text-zinc-500 leading-relaxed">
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