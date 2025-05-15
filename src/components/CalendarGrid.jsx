import { useCalendar } from "../hooks/useCalendar";
import CalendarHeader from "./CalendarHeader";
import WeekRow from "./WeekRow";

const CalendarGrid = () => {
  const { today, currentMonth, calendar, handlePrevMonth, handleNextMonth } =
    useCalendar();

  return (
    <div className="calendar-container p-4 max-w-7xl mx-auto bg-white rounded shadow">
      <CalendarHeader
        currentMonth={currentMonth}
        onPrev={handlePrevMonth}
        onNext={handleNextMonth}
      />

      <div className="grid grid-cols-7 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
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
    </div>
  );
};

export default CalendarGrid;
