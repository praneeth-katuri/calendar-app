const EventBadge = ({ event }) => (
  <div
    className="rounded px-1 py-0.5 text-xs text-white truncate"
    style={{ backgroundColor: event.color }}
    title={`${event.title} (${event.startTime} - ${event.endTime})`}
  >
    {event.title}
  </div>
);

export default EventBadge;
