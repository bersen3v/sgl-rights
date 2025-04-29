"use client";

import useRequest from "@/shared/network/hooks/useRequest";
import { gameEventApiManager } from "@/entities/gameEvent/api/gameEventApiManager";
import { MySpacing } from "@/shared/styles";
import InfoBoxes from "./components/infoBoxes";
import EventPageHeader from "./components/eventPageHeader";
import EventActions from "./components/eventActions";
import EventPageDesktopView from "./views/eventPageDesktopView";
import EventPageMobileView from "./views/eventPageMobileView";

export default function EventPageView({ eventId }: { eventId: number }) {
  const [getEventRequest, reloadGetEventRequest] = useRequest(
    () => gameEventApiManager.getEventById({ eventId: eventId }),
    []
  );

  return (
    <div style={{ display: "flex", scrollbarWidth: "none", width: "100%" }}>
      {getEventRequest.isLoaded && !getEventRequest.isLoading ? (
        <>
          {window.screen.width > 800 ? (
            <EventPageDesktopView
              event={getEventRequest.data}
            ></EventPageDesktopView>
          ) : (
            <EventPageMobileView
              event={getEventRequest.data}
            ></EventPageMobileView>
          )}
        </>
      ) : (
        <div>ddd</div>
      )}
    </div>
  );
}
