import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EventBadge from "./EventBadge";

const DayEventDialog = ({ date, events, children }) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Events on {date.format("DD MMM YYYY")}</DialogTitle>
      </DialogHeader>
      <div className="space-y-2 max-h-80 overflow-y-auto">
        {events.length === 0 ? (
          <div className="text-gray-500">No events</div>
        ) : (
          events.map((event, i) => (
            <div
              key={i}
              className="border p-2 rounded"
              style={{ backgroundColor: event.color }}
            >
              <div className="font-semibold">{event.title}</div>
              <div className="text-xs">
                {event.startTime} - {event.endTime}
              </div>
            </div>
          ))
        )}
      </div>
    </DialogContent>
  </Dialog>
);

export default DayEventDialog;
