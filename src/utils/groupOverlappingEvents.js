import isOverlap from "./isOverlap";

export const groupOverlappingEvents = (events) => {
  const groups = [];
  const used = new Set();

  for (let i = 0; i < events.length; i++) {
    if (used.has(events[i])) continue;

    const group = [events[i]];
    used.add(events[i]);

    for (let j = i + 1; j < events.length; j++) {
      if (used.has(events[j])) continue;

      if (group.some((e) => isOverlap(e, events[j]))) {
        group.push(events[j]);
        used.add(events[j]);
      }
    }

    groups.push(group);
  }

  return groups.flatMap((group) =>
    group.map((event) => ({
      ...event,
      color: group[0].color,
    }))
  );
};
