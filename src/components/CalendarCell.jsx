import dayjs from "dayjs";
import eventsData from "../data/events.json";
import EventBadge from "./EventBadge";

const CalendarCell = ({ date, today, currentMonth }) => {
  const isToday = date.isSame(today, "day");
  const isCurrentMonth = date.month() === currentMonth.month();

  const events = eventsData.filter((event) =>
    dayjs(event.date).isSame(date, "day")
  );

  return (
    <div
      className={`
        border h-32 p-1 text-left relative overflow-hidden
        ${isToday ? "bg-blue-100 font-bold" : ""}
        ${!isCurrentMonth ? "text-gray-400" : ""}
      `}
    >
      <div className="text-right text-sm">{date.date()}</div>
      <div className="space-y-1 mt-1 overflow-y-auto h-[80%] pr-1">
        {events.map((event, i) => (
          <EventBadge key={i} event={event} />
        ))}
      </div>
    </div>
  );
};

export default CalendarCell;
