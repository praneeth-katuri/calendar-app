import { useCalendar } from "@/hooks/useCalendar";
import CalendarHeader from "./CalendarHeader";
import WeekRow from "./WeekRow";
import Header from "./Header";
import Legend from "./Legend";

const CalendarGrid = () => {
  const {
    today,
    currentMonth,
    calendar,
    handlePrevMonth,
    handleNextMonth,
    goToToday,
  } = useCalendar();

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="my-[3rem] calendar-container p-4 bg-white max-w-7xl mx-auto rounded shadow">
      <Header onTodayClick={goToToday} />
      <CalendarHeader
        currentMonth={currentMonth}
        onPrev={handlePrevMonth}
        onNext={handleNextMonth}
      />

      <div className="grid grid-cols-7 mb-2">
        {weekDays.map((day) => (
          <div key={day} className="text-center font-medium uppercase text-sm">
            {day}
          </div>
        ))}
      </div>

      {calendar.map((week, weekIndex) => (
        <WeekRow
          key={weekIndex}
          week={week}
          today={today}
          currentMonth={currentMonth}
        />
      ))}

      <Legend />
    </div>
  );
};

export default CalendarGrid;
