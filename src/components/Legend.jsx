import { AlertTriangle } from "lucide-react";

const Legend = () => (
  <div className="flex items-center space-x-2 text-sm text-gray-600 mt-4">
    <AlertTriangle className="w-4 h-4 text-red-600" />
    <span>= Conflicting / Overlapping Events</span>
  </div>
);

export default Legend;
