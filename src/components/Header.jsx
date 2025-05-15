import { CalendarDays } from "lucide-react";

const Header = ({ onTodayClick }) => {
  return (
    <header className="w-full flex justify-between items-center p-4 bg-white/70 backdrop-blur-md shadow-sm border-b border-gray-200 mb-6">
      <div className="flex items-center space-x-2">
        <CalendarDays className="w-6 h-6 text-blue-600" />
        <h1 className="text-xl font-bold">My Calendar</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={onTodayClick}
          className="px-4 py-2 rounded bg-blue-500 text-white text-sm hover:bg-blue-600 transition font-bold"
        >
          Today
        </button>
      </div>
    </header>
  );
};

export default Header;
