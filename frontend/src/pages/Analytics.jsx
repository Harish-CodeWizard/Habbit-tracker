
import MainLayout from "../components/layout/MainLayout";
import {
  TrendingUp,
  Flame,
  Target,
  CalendarDays,
  BarChart3,
  Award,
  CheckCircle2,
} from "lucide-react";
import { useHabits } from "../hooks/useHabits";

const colorList = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-orange-500 to-red-500",
  "from-green-500 to-emerald-500",
  "from-yellow-500 to-orange-500",
  "from-pink-500 to-purple-500",
];

const Analytics = () => {
  const { habits: habitsRaw, loading, error } = useHabits();
  const habits = Array.isArray(habitsRaw) ? habitsRaw : [];

  // Calculate completion rate and streaks
  const totalDaysTracked = habits?.reduce((acc, h) => acc + (h.streak || 0), 0);
  const avgCompletion = habits && habits.length
    ? Math.round(
        (habits.reduce((acc, h) => acc + (h.percentCompleted || 0), 0) /
          (habits.length * 10)) *
          100
      )
    : 0;
  const maxStreak = habits?.reduce((max, h) => Math.max(max, h.streak || 0), 0);
  const productivityScore = avgCompletion;

  // Dummy weekly data for chart
  const weeklyData = [
    { day: "Mon", value: 60 },
    { day: "Tue", value: 80 },
    { day: "Wed", value: 70 },
    { day: "Thu", value: 90 },
    { day: "Fri", value: 50 },
    { day: "Sat", value: 100 },
    { day: "Sun", value: 40 },
  ];

  if (loading) return <div className="p-6 text-center">Loading analytics...</div>;
  if (error) return <div className="p-6 text-red-500">Error loading analytics</div>;

  return (
    <MainLayout>
      <div className="min-h-screen bg-[#0B0B0F] text-white p-4 sm:p-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

          <div>
            <p className="text-zinc-500 text-sm mb-2">
              PERFORMANCE OVERVIEW
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Analytics
            </h1>
          </div>

          <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 rounded-2xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all">

            <CalendarDays size={18} />

            Last 30 Days
          </button>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          {/* Card 1 */}
          <div className="bg-[#111114] border border-zinc-800 rounded-3xl p-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-5">
              <BarChart3 size={22} className="text-blue-400" />
            </div>
            <p className="text-zinc-500 text-sm">Total Days Tracked</p>
            <h2 className="text-4xl font-bold mt-2">{totalDaysTracked || 0}</h2>
          </div>
          {/* Card 2 */}
          <div className="bg-[#111114] border border-zinc-800 rounded-3xl p-6">
            <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center mb-5">
              <CheckCircle2 size={22} className="text-green-400" />
            </div>
            <p className="text-zinc-500 text-sm">Completion Rate</p>
            <h2 className="text-4xl font-bold mt-2">{avgCompletion}%</h2>
          </div>
          {/* Card 3 */}
          <div className="bg-[#111114] border border-zinc-800 rounded-3xl p-6">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-5">
              <Flame size={22} className="text-orange-400" />
            </div>
            <p className="text-zinc-500 text-sm">Current Streak</p>
            <h2 className="text-4xl font-bold mt-2">{maxStreak || 0}</h2>
          </div>
          {/* Card 4 */}
          <div className="bg-[#111114] border border-zinc-800 rounded-3xl p-6">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-5">
              <TrendingUp size={22} className="text-purple-400" />
            </div>
            <p className="text-zinc-500 text-sm">Productivity Score</p>
            <h2 className="text-4xl font-bold mt-2">{productivityScore}%</h2>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* Weekly Progress */}
          <div className="xl:col-span-2 bg-[#111114] border border-zinc-800 rounded-[30px] p-6">

            <div className="flex items-center justify-between mb-8">

              <div>
                <h2 className="text-2xl font-bold">
                  Weekly Progress
                </h2>

                <p className="text-zinc-500 text-sm mt-1">
                  Your consistency this week
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl text-sm text-zinc-400">
                Updated Today
              </div>
            </div>

            {/* Chart */}
            <div className="h-[320px] flex items-end justify-between gap-3">

              {Array.isArray(weeklyData) && weeklyData.map((item, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center gap-3"
                >

                  <div
                    style={{
                      height: `${item.value}%`,
                    }}
                    className="w-full rounded-2xl bg-gradient-to-t from-blue-500 to-purple-500 hover:opacity-90 transition-all"
                  ></div>

                  <span className="text-xs text-zinc-500">
                    {item.day}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Insights */}
          <div className="bg-[#111114] border border-zinc-800 rounded-[30px] p-6">

            <div className="flex items-center gap-3 mb-6">

              <Award
                size={24}
                className="text-yellow-400"
              />

              <h2 className="text-2xl font-bold">
                Insights
              </h2>
            </div>

            <div className="space-y-5">

              <div className="bg-[#18181B] border border-zinc-800 rounded-2xl p-5">

                <p className="text-zinc-500 text-sm">
                  Best Performance Day
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  Thursday
                </h3>

                <p className="text-green-400 text-sm mt-2">
                  +24% higher productivity
                </p>
              </div>

              <div className="bg-[#18181B] border border-zinc-800 rounded-2xl p-5">

                <p className="text-zinc-500 text-sm">
                  Most Consistent Habit
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  Reading
                </h3>

                <p className="text-blue-400 text-sm mt-2">
                  Completed 28 days in a row
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-5">

                <div className="flex items-center gap-3 mb-3">

                  <Target
                    size={20}
                    className="text-purple-400"
                  />

                  <h3 className="font-semibold">
                    Goal Progress
                  </h3>
                </div>

                <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">

                  <div className="w-[78%] h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>

                <p className="text-zinc-400 text-sm mt-3">
                  78% monthly goal achieved
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Habit Performance */}
        <div className="mt-6 bg-[#111114] border border-zinc-800 rounded-[30px] p-6">

          <div className="flex items-center justify-between mb-8">

            <div>
              <h2 className="text-2xl font-bold">
                Habit Performance
              </h2>

              <p className="text-zinc-500 text-sm mt-1">
                Track each habit completion rate
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {habits && habits.length === 0 && (
              <div className="text-zinc-400">No habits tracked yet.</div>
            )}
            {Array.isArray(habits) && habits.map((habit, index) => {
              const percent = habit.percentCompleted ? Math.round((habit.percentCompleted / 10) * 100) : 0;
              const color = colorList[index % colorList.length];
              return (
                <div
                  key={habit.id}
                  className="bg-[#18181B] border border-zinc-800 rounded-3xl p-5"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">{habit.title}</h3>
                    <span className="text-zinc-400 text-sm">{percent}%</span>
                  </div>
                  <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      style={{ width: percent + '%' }}
                      className={`h-full rounded-full bg-gradient-to-r ${color}`}
                    ></div>
                  </div>
                  <div className="text-xs text-zinc-500 mt-2">Streak: {habit.streak || 0} days</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Analytics;