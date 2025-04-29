import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";

export default function EventPageHeader({
  event,
  direction = "row",
}: {
  event: GameEvent;
  direction?: "row" | "column";
}) {
  return (
    <div style={{ display: "flex", flexDirection: direction }}>
      <img
        style={{
          width: direction == "column" ? "100%" : "40%",
          borderRadius: MyBordersRadius.r20,
          objectFit: "cover",
        }}
        src={event.previewPhoto}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: MySpacing.s15,
          gap: MySpacing.s10,
        }}
      >
        <h1 style={{ ...MyTypography.Helvetica22Normal }}>{event.name}</h1>
        <div>
          <h3 style={{ ...MyTypography.Helvetica16Normal }}>
            {event.discipline}
          </h3>
          <h3 style={{ ...MyTypography.Helvetica16Normal }}>{event.place}</h3>
        </div>
        <h3
          style={{ ...MyTypography.Helvetica19Medium, color: MyColors.green }}
        >
          {event.prize} $
        </h3>
      </div>
    </div>
  );
}
