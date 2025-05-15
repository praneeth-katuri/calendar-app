import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ConflictBadge from "./ConflictBadge";
import isOverlap from "../utils/isOverlap";
import { groupOverlappingEvents } from "../utils/groupOverlappingEvents";

const DayEventDialog = ({ date, events, children }) => {
  const unifiedEvents = groupOverlappingEvents(events);

  const getConflictsForEvent = (event) => {
    return unifiedEvents.filter(
      (other) => other !== event && isOverlap(event, other)
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Events on {date.format("DD MMM YYYY")}</DialogTitle>
        </DialogHeader>
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {unifiedEvents.length === 0 ? (
            <div className="text-gray-500">No events</div>
          ) : (
            unifiedEvents.map((event, i) => {
              const conflicts = getConflictsForEvent(event);
              return (
                <div
                  key={i}
                  className="border p-2 rounded relative"
                  style={{ backgroundColor: event.color }}
                >
                  <div className="flex justify-between items-center">
                    <div className="font-semibold">{event.title}</div>
                    {conflicts.length > 0 && (
                      <ConflictBadge conflictingEvents={conflicts} />
                    )}
                  </div>
                  <div className="text-xs">
                    {event.startTime} - {event.endTime}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DayEventDialog;
