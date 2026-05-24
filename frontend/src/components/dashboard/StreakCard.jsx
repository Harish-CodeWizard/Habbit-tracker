import React from "react";
import { Info } from "lucide-react";

export default function StreakCard() {

  // ---------- DATE ----------
  const today = new Date();

  const currentYear = today.getFullYear();

  // ---------- MONTHS ----------
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // ---------- DAYS ----------
  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  // ---------- COLORS ----------
  const getColor = (level) => {
    switch (level) {
      case 1:
        return "bg-[#0e4429] border border-[#1b5e20]";
      case 2:
        return "bg-[#006d32] border border-[#2ea043]";
      case 3:
        return "bg-[#26a641] border border-[#39d353]";
      case 4:
        return "bg-[#39d353] border border-[#7ee787]";
      default:
        return "bg-[#161b22] border border-[#30363d]";
    }
  };

  // ---------- GENERATE MONTH DATA ----------
  const generateMonthData = (monthIndex) => {

    const firstDay = new Date(
      currentYear,
      monthIndex,
      1
    );

    const lastDay = new Date(
      currentYear,
      monthIndex + 1,
      0
    );

    const totalDays = lastDay.getDate();

    // Sunday first
    const startDay = firstDay.getDay();

    const cells = [];

    // Empty spaces before first date
    for (let i = 0; i < startDay; i++) {
      cells.push(null);
    }

    // Add actual days
    for (let day = 1; day <= totalDays; day++) {

      cells.push({
        day,
        level: Math.floor(
          Math.random() * 5
        ),
      });
    }

    // Fill remaining cells
    while (cells.length % 7 !== 0) {
      cells.push(null);
    }

    // Convert to weeks
    const weeks = [];

    for (let i = 0; i < cells.length; i += 7) {
      weeks.push(cells.slice(i, i + 7));
    }

    return weeks;
  };

  return (
    <div className="w-full bg-[#0d1117] border border-[#30363d] rounded-2xl p-4 sm:p-5 overflow-hidden shadow-[0_0_25px_rgba(57,211,83,0.05)]">

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 mb-6">

        {/* Left */}
        <div className="flex items-center gap-2 flex-wrap">

          <h2 className="text-white text-2xl sm:text-3xl font-bold">

            594
          </h2>

          <span className="text-[#8b949e] text-sm sm:text-base">
            submissions in {currentYear}
          </span>

          <Info
            size={16}
            className="text-[#8b949e]"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-5 flex-wrap text-sm">

          <div>
            <span className="text-[#8b949e]">
              Active days:
            </span>

            <span className="text-white font-semibold ml-1">
              252
            </span>
          </div>

          <div>
            <span className="text-[#8b949e]">
              Max streak:
            </span>

            <span className="text-white font-semibold ml-1">
              59
            </span>
          </div>

          <div className="px-3 py-1.5 rounded-lg bg-[#161b22] border border-[#30363d] text-[#39d353] text-sm">

            {today.toLocaleString(
              "default",
              {
                month: "short",
              }
            )}{" "}
            {today.getDate()}
          </div>
        </div>
      </div>

      {/* Scroll Area */}
      <div className="overflow-x-auto pb-2">

        <div className="min-w-fit">

          {/* Month Labels */}
          <div className="flex ml-[42px] gap-4 mb-2">

            {months.map((month) => (
              <div
                key={month}
                className="text-[#8b949e] text-xs font-medium w-[72px]"
              >
                {month}
              </div>
            ))}
          </div>

          <div className="flex gap-2">

            {/* Days */}
            <div className="flex flex-col gap-[3px] pt-[1px]">

              {days.map((day) => (
                <div
                  key={day}
                  className="h-[11px] text-[#8b949e] text-[10px] w-[30px]"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Heatmaps */}
            <div className="flex gap-4">

              {months.map(
                (month, monthIndex) => {

                  const monthData =
                    generateMonthData(
                      monthIndex
                    );

                  return (
                    <div
                      key={month}
                      className="flex gap-[3px]"
                    >

                      {monthData.map(
                        (
                          week,
                          weekIndex
                        ) => (
                          <div
                            key={weekIndex}
                            className="grid grid-rows-7 gap-[3px]"
                          >

                            {week.map(
                              (
                                cell,
                                index
                              ) => (
                                <div
                                  key={index}
                                  title={
                                    cell
                                      ? `${month} ${cell.day}`
                                      : ""
                                  }
                                  className={`w-[11px] h-[11px] rounded-[2px] transition-all duration-200 hover:scale-110 ${
                                    cell
                                      ? getColor(
                                          cell.level
                                        )
                                      : "bg-transparent"
                                  }`}
                                ></div>
                              )
                            )}
                          </div>
                        )
                      )}
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-6 flex-wrap gap-4">

            {/* Legend */}
            <div className="flex items-center gap-2 text-xs text-[#8b949e]">

              <span>Less</span>

              <div className="flex items-center gap-[3px]">

                <div className="w-[11px] h-[11px] rounded-[2px] bg-[#161b22] border border-[#30363d]"></div>

                <div className="w-[11px] h-[11px] rounded-[2px] bg-[#0e4429] border border-[#1b5e20]"></div>

                <div className="w-[11px] h-[11px] rounded-[2px] bg-[#006d32] border border-[#2ea043]"></div>

                <div className="w-[11px] h-[11px] rounded-[2px] bg-[#26a641] border border-[#39d353]"></div>

                <div className="w-[11px] h-[11px] rounded-[2px] bg-[#39d353] border border-[#7ee787]"></div>
              </div>

              <span>More</span>
            </div>

            {/* Footer */}
            <p className="text-[#8b949e] text-xs">

              Contribution activity for the past year
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}