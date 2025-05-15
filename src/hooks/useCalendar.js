import { useState } from "react";
import dayjs from "dayjs";

export const useCalendar = () => {
  const today = dayjs();
  const [currentMonth, setCurrentMonth] = useState(dayjs().startOf("month"));

  const generateCalendar = (month) => {
    const startDate = month.startOf("month").startOf("week");
    const endDate = month.endOf("month").endOf("week");

    const weeks = [];
    let currentDay = startDate.clone();

    while (
      currentDay.isBefore(endDate, "day") ||
      currentDay.isSame(endDate, "day")
    ) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        week.push(currentDay.clone());
        currentDay = currentDay.add(1, "day");
      }
      weeks.push(week);
    }

    return weeks;
  };

  const calendar = generateCalendar(currentMonth);

  const handlePrevMonth = () =>
    setCurrentMonth(currentMonth.subtract(1, "month"));
  const handleNextMonth = () => setCurrentMonth(currentMonth.add(1, "month"));

  return {
    today,
    currentMonth,
    calendar,
    handlePrevMonth,
    handleNextMonth,
  };
};
