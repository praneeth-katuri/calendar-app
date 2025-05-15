import dayjs from "dayjs";
import eventsData from "../data/events.json";
import EventBadge from "./EventBadge";
import DayEventDialog from "./DayEventDialog";

const CalendarCell = ({ date, today, currentMonth }) => {
  const isToday = date.isSame(today, "day");
  const isCurrentMonth = date.month() === currentMonth.month();

  const events = eventsData.filter((event) =>
    dayjs(event.date).isSame(date, "day")
  );

  const maxEventsToShow = 3;
  const displayedEvents = events.slice(0, maxEventsToShow);
  const hiddenEventsCount = events.length - displayedEvents.length;

  return (
    <DayEventDialog date={date} events={events}>
      <div
        className={`
          border h-32 p-1 text-left relative overflow-hidden cursor-pointer
          ${isToday ? "bg-blue-100 font-bold" : ""}
          ${!isCurrentMonth ? "text-gray-400" : ""}
        `}
      >
        <div className="flex justify-between text-sm">
          <span>{date.date()}</span>
        </div>

        <div className="space-y-1 mt-1 overflow-y-auto h-[80%] pr-1">
          {displayedEvents.map((event, i) => (
            <EventBadge key={i} event={event} />
          ))}
          {hiddenEventsCount > 0 && (
            <div className="more-badge text-xs text-gray-600 font-semibold">
              +{hiddenEventsCount} more
            </div>
          )}
        </div>
      </div>
    </DayEventDialog>
  );
};

export default CalendarCell;
