import dayjs from "dayjs";
import eventsData from "@/data/events.json";
import EventBadge from "./EventBadge";
import DayEventDialog from "./DayEventDialog";
import isOverlap from "@/utils/isOverlap";
import { groupOverlappingEvents } from "@/utils/groupOverlappingEvents";
import { AlertTriangle } from "lucide-react";

const CalendarCell = ({ date, today, currentMonth }) => {
  const isToday = date.isSame(today, "day");
  const isCurrentMonth = date.month() === currentMonth.month();

  const events = eventsData.filter((event) =>
    dayjs(event.date).isSame(date, "day")
  );

  const groupedEvents = groupOverlappingEvents(events);

  const hasConflict = events.some((eventA, index) =>
    events.slice(index + 1).some((eventB) => isOverlap(eventA, eventB))
  );

  const maxEventsToShow = 3;
  const displayedEvents = groupedEvents.slice(0, maxEventsToShow);
  const hiddenEventsCount = groupedEvents.length - displayedEvents.length;

  return (
    <DayEventDialog date={date} events={events}>
      <div
        className={`
          hover:bg-[#f3f4f6] border h-32 p-1 text-left relative overflow-hidden cursor-pointer
          ${isToday ? "bg-blue-100 font-bold hover:bg-blue-100" : ""}
          ${!isCurrentMonth ? "text-gray-400" : ""}
        `}
      >
        <div className="flex justify-between text-sm">
          <span>{date.date()}</span>
          {hasConflict && (
            <AlertTriangle className="w-4 h-4 text-red-600">
              <title>Conflicting events on this day</title>
            </AlertTriangle>
          )}
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
