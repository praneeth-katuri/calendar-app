import dayjs from "dayjs";

const isOverlap = (eventA, eventB) => {
  const startA = dayjs(
    `${eventA.date} ${eventA.startTime}`,
    "YYYY-MM-DD HH:mm"
  );
  const endA = dayjs(`${eventA.date} ${eventA.endTime}`, "YYYY-MM-DD HH:mm");
  const startB = dayjs(
    `${eventB.date} ${eventB.startTime}`,
    "YYYY-MM-DD HH:mm"
  );
  const endB = dayjs(`${eventB.date} ${eventB.endTime}`, "YYYY-MM-DD HH:mm");

  return startA.isBefore(endB) && endA.isAfter(startB);
};

export default isOverlap;
