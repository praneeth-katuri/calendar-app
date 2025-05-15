import CalendarCell from "./CalendarCell";

const WeekRow = ({ week, today, currentMonth }) => (
  <div className="grid grid-cols-7">
    {week.map((date, dateIndex) => (
      <CalendarCell
        key={dateIndex}
        date={date}
        today={today}
        currentMonth={currentMonth}
      />
    ))}
  </div>
);

export default WeekRow;
