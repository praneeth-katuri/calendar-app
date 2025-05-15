import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AlertTriangle } from "lucide-react";

const ConflictBadge = ({ conflictingEvents }) => (
  <Popover>
    <PopoverTrigger asChild>
      <AlertTriangle
        className="w-4 h-4 text-red-600 cursor-pointer ml-1"
        title="Conflicting event"
      />
    </PopoverTrigger>
    <PopoverContent className="w-64">
      <div className="font-bold mb-2">Conflicts with:</div>
      <ul className="space-y-1 text-sm">
        {conflictingEvents.map((event, i) => (
          <li key={i}>
            <span className="font-semibold">{event.title}</span> (
            {event.startTime} - {event.endTime})
          </li>
        ))}
      </ul>
    </PopoverContent>
  </Popover>
);

export default ConflictBadge;
