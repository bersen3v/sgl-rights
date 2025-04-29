import useRequest from "@/shared/network/hooks/useRequest";
import { gameEventApiManager } from "@/entities/gameEvent/api/gameEventApiManager";
import { MySpacing } from "@/shared/styles";
import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import EventActions from "../components/eventActions";
import InfoBoxes from "../components/infoBoxes";
import EventPageHeader from "../components/eventPageHeader";

export default function EventPageMobileView({ event }: { event: GameEvent }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: MySpacing.s20,
        gap: MySpacing.s10,
      }}
    >
      <EventPageHeader event={event} direction="column"></EventPageHeader>
      <EventActions event={event}></EventActions>
      <InfoBoxes event={event}></InfoBoxes>
    </div>
  );
}
