import StreakCard from "../components/dashboard/StreakCard";
import { useHabits } from "../hooks/useHabits";
import MainLayout from "../components/layout/MainLayout";

import {
  Flame,
  Trophy,
  Target,
  CalendarDays,
  Edit3,
 CheckCircle2,
  TrendingUp,
  Crown,
  Sparkles,
  Award,
  Star,
} from "lucide-react";

export default function Profile() {
  const { habits, loading, error } = useHabits();
  return (
    <MainLayout>
      <div className="min-h-screen bg-[#0d1117] text-[#e6edf3] p-3 sm:p-5">

        {/* Main Container */}
        <div className="border border-[#30363d] rounded-2xl overflow-hidden bg-[#0d1117]">

          {/* Banner */}
          <div className="relative h-[180px] sm:h-[210px] overflow-hidden border-b border-[#30363d]">

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-purple-500/10 to-pink-500/10"></div>

            {/* Grid */}
            <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            {/* Edit Button */}
            <div className="absolute top-4 right-4 z-20">

              <button className="flex items-center gap-2 bg-[#161b22] border border-[#30363d] px-4 py-2 rounded-xl hover:bg-[#21262d] transition-all">

                <Edit3 size={14} />

                <span className="text-sm">
                  Edit
                </span>
              </button>
            </div>
          </div>

          {/* Profile Content */}
          <div className="px-4 sm:px-6 pb-6">

            {/* Top */}
            <div className="-mt-14 relative z-20 flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">

              {/* Left */}
              <div className="flex flex-col sm:flex-row sm:items-end gap-5">

                {/* Avatar */}
                <div className="relative">

                  <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[3px]">

                    <div className="w-full h-full rounded-[22px] bg-[#0d1117] flex items-center justify-center text-4xl font-bold">

                      H
                    </div>
                  </div>

                  {/* Active */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-green-500 border-2 border-[#0d1117]"></div>
                </div>

                {/* Info */}
                <div>

                  {/* Badge */}
                  <div className="flex items-center gap-2 flex-wrap mb-3">

                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs">

                      <Crown size={12} />

                      Elite
                    </div>

                    <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs">

                      Level 08
                    </div>
                  </div>

                  {/* Name */}
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">

                    Harirethesh
                  </h1>

                  {/* Email */}
                  <p className="text-[#8b949e] mt-2 text-sm">
                    harirethesh@example.com
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 flex-wrap mt-3 text-xs text-[#8b949e]">

                    <div className="flex items-center gap-1">

                      <CalendarDays size={13} />

                      Joined Jan 2024
                    </div>

                    <div className="flex items-center gap-1">

                      <Sparkles size={13} />

                      Productivity
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card */}
              <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-4 w-full xl:w-[260px]">

                <div className="flex items-center justify-between mb-4">

                  <div>

                    <p className="text-[#8b949e] text-xs">
                      Current Level
                    </p>

                    <h2 className="text-5xl font-bold mt-1">
                      08
                    </h2>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center">

                    <Flame
                      size={26}
                      className="text-orange-400"
                    />
                  </div>
                </div>

                {/* XP */}
                <div>

                  <div className="flex items-center justify-between mb-2">

                    <p className="text-xs text-[#8b949e]">
                      XP Progress
                    </p>

                    <p className="text-xs text-[#8b949e]">
                      780 / 1000
                    </p>
                  </div>

                  <div className="w-full h-2 bg-[#21262d] rounded-full overflow-hidden">

                    <div className="w-[78%] h-full rounded-full bg-[#2f81f7]"></div>
                  </div>

                  <p className="text-[#8b949e] text-xs mt-2">
                    220 XP remaining
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">

              {/* Card */}
              <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-4">

                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">

                  <CheckCircle2
                    size={18}
                    className="text-green-400"
                  />
                </div>

                <p className="text-[#8b949e] text-xs">
                  Completed
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  248
                </h3>
              </div>

              {/* Card */}
              <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-4">

                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">

                  <Flame
                    size={18}
                    className="text-orange-400"
                  />
                </div>

                <p className="text-[#8b949e] text-xs">
                  Best Streak
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  32
                </h3>
              </div>

              {/* Card */}
              <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-4">

                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">

                  <Target
                    size={18}
                    className="text-purple-400"
                  />
                </div>

                <p className="text-[#8b949e] text-xs">
                  Active Habits
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  12
                </h3>
              </div>

              {/* Card */}
              <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-4">

                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">

                  <TrendingUp
                    size={18}
                    className="text-blue-400"
                  />
                </div>

                <p className="text-[#8b949e] text-xs">
                  Success Rate
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  82%
                </h3>
              </div>
            </div>

            {/* Heatmap: Show a StreakCard for each habit */}
            <div className="mt-6">
              {loading && <div className="text-center text-sm text-zinc-400">Loading streaks...</div>}
              {error && <div className="text-center text-sm text-red-500">Error loading habits</div>}
              {habits && habits.length === 0 && <div className="text-center text-sm text-zinc-400">No habits yet.</div>}
              {Array.isArray(habits) && habits.map(habit => (
                <div key={habit.id} className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-lg text-white">{habit.title}</span>
                    <span className="text-xs text-green-400">Streak: {habit.streak || 0} days</span>
                  </div>
                  <StreakCard streak={habit.streak || 0} />
                </div>
              ))}
            </div>

            {/* Bottom */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-6">

              {/* About */}
              <div className="xl:col-span-2 bg-[#161b22] border border-[#30363d] rounded-2xl p-5">

                <div className="flex items-center gap-2 mb-4">

                  <Sparkles
                    size={18}
                    className="text-blue-400"
                  />

                  <h2 className="text-xl font-semibold">
                    About
                  </h2>
                </div>

                <p className="text-[#8b949e] leading-relaxed text-sm">

                  Passionate about building better habits,
                  improving productivity, and maintaining
                  discipline every single day. Focused on
                  fitness, deep work, and long-term
                  consistency.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">

                  {[
                    "Fitness",
                    "Productivity",
                    "Consistency",
                    "Deep Work",
                  ].map((tag) => (
                    <div
                      key={tag}
                      className="px-3 py-1.5 rounded-lg bg-[#0d1117] border border-[#30363d] text-xs text-[#c9d1d9]"
                    >
                      #{tag}
                    </div>
                  ))}
                </div>
              </div>

              {/* Badges */}
              <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-5">

                <div className="flex items-center gap-2 mb-5">

                  <Award
                    size={18}
                    className="text-yellow-400"
                  />

                  <h2 className="text-xl font-semibold">
                    Badges
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-3">

                  {[
                    {
                      icon: Flame,
                      name: "Streak",
                      color: "text-orange-400",
                    },
                    {
                      icon: Trophy,
                      name: "Champion",
                      color: "text-yellow-400",
                    },
                    {
                      icon: Star,
                      name: "Focused",
                      color: "text-blue-400",
                    },
                    {
                      icon: Crown,
                      name: "Elite",
                      color: "text-purple-400",
                    },
                  ].map((badge, index) => {
                    const Icon = badge.icon;

                    return (
                      <div
                        key={index}
                        className="bg-[#0d1117] border border-[#30363d] rounded-xl p-4 flex flex-col items-center justify-center"
                      >

                        <div className="w-12 h-12 rounded-xl bg-[#161b22] flex items-center justify-center mb-3">

                          <Icon
                            size={20}
                            className={badge.color}
                          />
                        </div>

                        <p className="text-xs text-[#c9d1d9]">
                          {badge.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}