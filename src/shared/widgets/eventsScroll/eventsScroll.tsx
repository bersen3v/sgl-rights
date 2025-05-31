import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import EventCard from "@/entities/gameEvent/ui/eventCard";
import { MySpacing } from "@/shared/styles";

export default function EventsScroll({
  isAdmin = false,
  fullWidth = false,
  events,
}: {
  isAdmin?: boolean;
  fullWidth?: boolean;
  events: GameEvent[] | undefined;
}) {
  return (
    <div
      style={{
        display: "flex",
        height: fullWidth ? 1000 : 100,
        width: "100%",
        flexWrap: "wrap",
        gap: MySpacing.s10,
      }}
    >
      {events ? (
        [...events].map((event, index) => (
          <EventCard
            isAdmin={isAdmin}
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
