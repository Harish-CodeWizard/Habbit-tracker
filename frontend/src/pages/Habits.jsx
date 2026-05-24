import MainLayout from "../components/layout/MainLayout";

import {
  Plus,
  Flame,
  CheckCircle2,
  Clock3,
  Target,
  MoreHorizontal,
} from "lucide-react";

const habits = [
  {
    name: "Morning Workout",
    streak: "12 Day Streak",
    status: "Completed",
    completed: true,
    progress: "92%",
  },
  {
    name: "Read 20 Pages",
    streak: "8 Day Streak",
    status: "Pending",
    completed: false,
    progress: "76%",
  },
  {
    name: "Meditation",
    streak: "15 Day Streak",
    status: "Completed",
    completed: true,
    progress: "88%",
  },
  {
    name: "Deep Work Session",
    streak: "5 Day Streak",
    status: "Pending",
    completed: false,
    progress: "64%",
  },
];

export default function Habits() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-[#0B0B0F] text-white p-4 sm:p-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

          <div>
            <p className="text-zinc-500 text-sm mb-2">
              DAILY ROUTINES
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Habits
            </h1>

            <p className="text-zinc-500 mt-2 text-sm sm:text-base">
              Manage and track your daily habits.
            </p>
          </div>

          <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 rounded-2xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all">

            <Plus size={18} />

            Add Habit
          </button>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

          {/* Card 1 */}
          <div className="bg-[#111114] border border-zinc-800 rounded-3xl p-6">

            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-5">

              <Target
                size={22}
                className="text-blue-400"
              />
            </div>

            <p className="text-zinc-500 text-sm">
              Total Habits
            </p>

            <h2 className="text-4xl font-bold mt-2">
              12
            </h2>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111114] border border-zinc-800 rounded-3xl p-6">

            <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center mb-5">

              <CheckCircle2
                size={22}
                className="text-green-400"
              />
            </div>

            <p className="text-zinc-500 text-sm">
              Completed Today
            </p>

            <h2 className="text-4xl font-bold mt-2">
              7
            </h2>
          </div>

          {/* Card 3 */}
          <div className="bg-[#111114] border border-zinc-800 rounded-3xl p-6">

            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-5">

              <Flame
                size={22}
                className="text-orange-400"
              />
            </div>

            <p className="text-zinc-500 text-sm">
              Best Streak
            </p>

            <h2 className="text-4xl font-bold mt-2">
              32
            </h2>
          </div>

          {/* Card 4 */}
          <div className="bg-[#111114] border border-zinc-800 rounded-3xl p-6">

            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-5">

              <Clock3
                size={22}
                className="text-purple-400"
              />
            </div>

            <p className="text-zinc-500 text-sm">
              Pending Tasks
            </p>

            <h2 className="text-4xl font-bold mt-2">
              5
            </h2>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* Habit List */}
          <div className="xl:col-span-2 bg-[#111114] border border-zinc-800 rounded-[30px] p-6">

            <div className="flex items-center justify-between mb-8">

              <div>
                <h2 className="text-2xl font-bold">
                  Your Habits
                </h2>

                <p className="text-zinc-500 text-sm mt-1">
                  Track your consistency daily
                </p>
              </div>

              <button className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl text-sm text-zinc-400 hover:bg-zinc-800 transition-all">

                View All
              </button>
            </div>

            {/* Habit Cards */}
            <div className="space-y-5">

              {habits.map((habit, index) => (
                <div
                  key={index}
                  className="bg-[#18181B] border border-zinc-800 rounded-3xl p-5 hover:border-zinc-700 transition-all"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div className="flex items-center gap-4">

                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                          habit.completed
                            ? "bg-green-500/20"
                            : "bg-zinc-800"
                        }`}
                      >

                        <CheckCircle2
                          size={24}
                          className={
                            habit.completed
                              ? "text-green-400"
                              : "text-zinc-500"
                          }
                        />
                      </div>

                      <div>

                        <h3 className="text-xl font-semibold">
                          {habit.name}
                        </h3>

                        <div className="flex items-center gap-3 mt-2 flex-wrap">

                          <span className="text-zinc-500 text-sm">
                            {habit.streak}
                          </span>

                          <span
                            className={`text-xs px-3 py-1 rounded-full border ${
                              habit.completed
                                ? "bg-green-500/10 text-green-400 border-green-500/20"
                                : "bg-orange-500/10 text-orange-400 border-orange-500/20"
                            }`}
                          >
                            {habit.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button className="text-zinc-500 hover:text-white transition-all">

                      <MoreHorizontal size={22} />
                    </button>
                  </div>

                  {/* Progress */}
                  <div className="mt-5">

                    <div className="flex items-center justify-between mb-2">

                      <p className="text-zinc-500 text-sm">
                        Completion Progress
                      </p>

                      <span className="text-sm text-zinc-400">
                        {habit.progress}
                      </span>
                    </div>

                    <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">

                      <div
                        style={{
                          width: habit.progress,
                        }}
                        className={`h-full rounded-full ${
                          habit.completed
                            ? "bg-gradient-to-r from-green-500 to-emerald-500"
                            : "bg-gradient-to-r from-blue-500 to-purple-500"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add Habit Panel */}
          <div className="bg-[#111114] border border-zinc-800 rounded-[30px] p-6 h-fit">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">

                <Plus size={22} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Add Habit
                </h2>

                <p className="text-zinc-500 text-sm">
                  Create a new daily routine
                </p>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-5">

              {/* Habit Name */}
              <div>

                <label className="text-sm text-zinc-400 block mb-2">

                  Habit Name
                </label>

                <input
                  type="text"
                  placeholder="Enter habit name"
                  className="w-full bg-[#18181B] border border-zinc-800 rounded-2xl px-4 py-3.5 outline-none focus:border-blue-500 transition-all"
                />
              </div>

              {/* Category */}
              <div>

                <label className="text-sm text-zinc-400 block mb-2">

                  Category
                </label>

                <select className="w-full bg-[#18181B] border border-zinc-800 rounded-2xl px-4 py-3.5 outline-none focus:border-purple-500 transition-all text-zinc-400">

                  <option>Fitness</option>
                  <option>Productivity</option>
                  <option>Health</option>
                  <option>Learning</option>
                </select>
              </div>

              {/* Frequency */}
              <div>

                <label className="text-sm text-zinc-400 block mb-2">

                  Frequency
                </label>

                <select className="w-full bg-[#18181B] border border-zinc-800 rounded-2xl px-4 py-3.5 outline-none focus:border-purple-500 transition-all text-zinc-400">

                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>

              {/* Goal */}
              <div>

                <label className="text-sm text-zinc-400 block mb-2">

                  Goal
                </label>

                <input
                  type="text"
                  placeholder="Example: 30 mins"
                  className="w-full bg-[#18181B] border border-zinc-800 rounded-2xl px-4 py-3.5 outline-none focus:border-blue-500 transition-all"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3.5 rounded-2xl font-semibold hover:opacity-90 transition-all"
              >
                Create Habit
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}