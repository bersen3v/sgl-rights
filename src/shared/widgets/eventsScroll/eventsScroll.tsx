import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import EventCard from "@/entities/gameEvent/ui/eventCard";
import { MySpacing } from "@/shared/styles";

export default function EventsScroll({
  fullWidth = false,
  events,
}: {
  fullWidth?: boolean;
  events: GameEvent[] | undefined;
}) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        gap: MySpacing.s10,
      }}
    >
      {events ? (
        [...events, ...events, ...events, ...events].map((event, index) => (
          <EventCard
            fullWidth={fullWidth}
            event={event}
            key={index}
          ></EventCard>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}
