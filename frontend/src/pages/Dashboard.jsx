import MainLayout from "../components/layout/MainLayout";

import {
  Search,
  Plus,
  Flame,
  MoreHorizontal,
  Bell,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Dumbbell,
  BookOpen,
  HeartPulse,
  Coffee,
} from "lucide-react";

const habits = [
  {
    title: "Morning Workout",
    progress: "1 / 5 km",
    icon: Dumbbell,
    color: "bg-orange-500/10 text-orange-400",
    action: "Log",
  },
  {
    title: "Read Books",
    progress: "0 / 15 min",
    icon: BookOpen,
    color: "bg-blue-500/10 text-blue-400",
    action: "Timer",
  },
  {
    title: "Meditation",
    progress: "0 / 15 min",
    icon: HeartPulse,
    color: "bg-green-500/10 text-green-400",
    action: "Done",
  },
  {
    title: "Drink Water",
    progress: "0 / 2 L",
    icon: Coffee,
    color: "bg-cyan-500/10 text-cyan-400",
    action: "Log",
  },
];

const weeklyHabits = [
  {
    title: "Limit Video Game",
    progress: "0 / 5 hr",
    success: true,
  },
  {
    title: "Hit the Gym",
    progress: "0 / 3 times",
    success: false,
  },
  {
    title: "Spend Time with Family",
    progress: "0 / 8 times",
    success: false,
  },
];

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-[#0d1117] text-[#e6edf3] p-3 sm:p-5">

        {/* Main Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[260px_1fr_280px] gap-5">

          {/* LEFT SIDEBAR */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-4 h-fit">

            {/* Search */}
            <div className="flex items-center gap-3 bg-[#0d1117] border border-[#30363d] rounded-xl px-4 py-3 mb-5">

              <Search
                size={18}
                className="text-[#8b949e]"
              />

              <input
                type="text"
                placeholder="Search habits"
                className="bg-transparent outline-none text-sm w-full placeholder:text-[#8b949e]"
              />
            </div>

            {/* Tabs */}
            <div className="space-y-2 mb-6">

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#2f81f7] text-white text-sm font-medium">

                <CheckCircle2 size={17} />

                All Habits
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#21262d] text-[#8b949e] text-sm transition-all">

                <Clock3 size={17} />

                Afternoon
              </button>
            </div>

            {/* Areas */}
            <div className="mb-6">

              <p className="text-[#8b949e] text-xs mb-3 uppercase tracking-wide">

                Areas
              </p>

              <button className="flex items-center gap-2 text-sm text-[#8b949e] hover:text-white transition-all">

                <Plus size={15} />

                New Area
              </button>
            </div>

            {/* Preferences */}
            <div>

              <p className="text-[#8b949e] text-xs mb-3 uppercase tracking-wide">

                Preferences
              </p>

              <div className="space-y-2">

                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#21262d] text-sm text-[#8b949e] transition-all">

                  Manage Habits
                </button>

                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#21262d] text-sm text-[#8b949e] transition-all">

                  App Settings
                </button>

                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#21262d] text-sm text-[#8b949e] transition-all">

                  Resources
                </button>
              </div>
            </div>
          </div>

          {/* CENTER */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden">

            {/* Topbar */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-[#30363d] px-5 py-4">

              {/* Left */}
              <div>

                <h1 className="text-2xl font-bold">
                  All Habits
                </h1>

                <p className="text-[#8b949e] text-sm mt-1">
                  Track your daily routines
                </p>
              </div>

              {/* Right */}
              <div className="flex items-center gap-3 flex-wrap">

                <button className="flex items-center gap-2 bg-[#0d1117] border border-[#30363d] px-4 py-2 rounded-xl text-sm hover:bg-[#21262d] transition-all">

                  <CalendarDays size={15} />

                  Today
                </button>

                <button className="flex items-center gap-2 bg-[#0d1117] border border-[#30363d] px-4 py-2 rounded-xl text-sm hover:bg-[#21262d] transition-all">

                  Alphabetical
                </button>

                <button className="flex items-center gap-2 bg-[#2f81f7] px-4 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition-all">

                  <Plus size={15} />

                  Add Habit
                </button>
              </div>
            </div>

            {/* Habit List */}
            <div className="p-4 space-y-3">

              {habits.map((habit, index) => {
                const Icon = habit.icon;

                return (
                  <div
                    key={index}
                    className="bg-[#0d1117] border border-[#30363d] rounded-xl px-4 py-4 hover:border-[#2f81f7]/40 transition-all"
                  >

                    <div className="flex items-center justify-between gap-4">

                      {/* Left */}
                      <div className="flex items-center gap-4">

                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center ${habit.color}`}
                        >

                          <Icon size={18} />
                        </div>

                        <div>

                          <h3 className="font-medium">
                            {habit.title}
                          </h3>

                          <p className="text-[#8b949e] text-sm mt-1">
                            {habit.progress}
                          </p>
                        </div>
                      </div>

                      {/* Right */}
                      <div className="flex items-center gap-2">

                        <button className="px-3 py-2 rounded-lg bg-[#161b22] border border-[#30363d] text-sm hover:bg-[#21262d] transition-all">

                          {habit.action}
                        </button>

                        <button className="w-9 h-9 rounded-lg hover:bg-[#21262d] flex items-center justify-center transition-all">

                          <MoreHorizontal size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Weekly Section */}
              <div className="pt-6">

                <div className="flex items-center justify-between mb-4">

                  <h2 className="text-lg font-semibold">
                    This Week
                  </h2>

                  <button className="text-[#8b949e] hover:text-white transition-all">

                    <MoreHorizontal size={18} />
                  </button>
                </div>

                <div className="space-y-3">

                  {weeklyHabits.map(
                    (habit, index) => (
                      <div
                        key={index}
                        className="bg-[#0d1117] border border-[#30363d] rounded-xl px-4 py-4"
                      >

                        <div className="flex items-center justify-between">

                          <div>

                            <h3 className="font-medium">
                              {habit.title}
                            </h3>

                            <p className="text-[#8b949e] text-sm mt-1">
                              {habit.progress}
                            </p>
                          </div>

                          <button
                            className={`px-3 py-2 rounded-lg text-sm ${
                              habit.success
                                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                : "bg-[#161b22] border border-[#30363d]"
                            }`}
                          >
                            {habit.success
                              ? "Succeed"
                              : "+1"}
                          </button>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="space-y-5">

            {/* Streak */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-5">

              <div className="flex items-center justify-between mb-5">

                <div>

                  <p className="text-[#8b949e] text-xs">
                    CURRENT STREAK
                  </p>

                  <h2 className="text-5xl font-bold mt-2">
                    43
                  </h2>

                  <p className="text-[#8b949e] text-sm">
                    days
                  </p>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center">

                  <Flame
                    size={28}
                    className="text-orange-400"
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-3">

                <div className="flex items-center justify-between bg-[#0d1117] border border-[#30363d] rounded-xl p-3">

                  <div>

                    <p className="text-xs text-[#8b949e]">
                      SUCCESS DAYS
                    </p>

                    <h3 className="text-xl font-semibold mt-1">
                      4 days
                    </h3>
                  </div>

                  <CheckCircle2
                    size={20}
                    className="text-green-400"
                  />
                </div>

                <div className="flex items-center justify-between bg-[#0d1117] border border-[#30363d] rounded-xl p-3">

                  <div>

                    <p className="text-xs text-[#8b949e]">
                      ZERO DAYS
                    </p>

                    <h3 className="text-xl font-semibold mt-1">
                      0 days
                    </h3>
                  </div>

                  <Bell
                    size={20}
                    className="text-red-400"
                  />
                </div>
              </div>
            </div>

            {/* Calendar */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-5">

              <div className="flex items-center justify-between mb-5">

                <h2 className="font-semibold">
                  December 2025
                </h2>

                <button className="text-[#8b949e] hover:text-white transition-all">

                  <MoreHorizontal size={18} />
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 text-center text-sm">

                {[
                  "Su",
                  "Mo",
                  "Tu",
                  "We",
                  "Th",
                  "Fr",
                  "Sa",
                ].map((day) => (
                  <div
                    key={day}
                    className="text-[#8b949e] text-xs"
                  >
                    {day}
                  </div>
                ))}

                {Array.from({ length: 31 }).map(
                  (_, i) => (
                    <button
                      key={i}
                      className={`aspect-square rounded-lg text-sm transition-all ${
                        i + 1 === 20
                          ? "bg-[#7c3aed] text-white"
                          : "hover:bg-[#21262d]"
                      }`}
                    >
                      {i + 1}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Monthly Avg */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-5">

              <p className="text-[#8b949e] text-xs">
                MONTHLY AVERAGE
              </p>

              <h2 className="text-5xl font-bold mt-3">
                3hr
              </h2>

              <p className="text-[#8b949e] mt-2 text-sm">
                Average productive time
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}