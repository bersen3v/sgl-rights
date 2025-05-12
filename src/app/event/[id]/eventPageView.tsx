"use client";

import useRequest from "@/shared/network/hooks/useRequest";
import { gameEventApiManager } from "@/entities/gameEvent/api/gameEventApiManager";
import EventPageDesktopView from "./views/eventPageDesktopView";
import EventPageMobileView from "./views/eventPageMobileView";
import { useWindowSize } from "react-use";

export default function EventPageView({ eventId }: { eventId: number }) {
  const { width } = useWindowSize();
  const [getEventRequest, reloadGetEventRequest] = useRequest(
    () => gameEventApiManager.getEventById({ eventId: eventId }),
    []
  );

  return (
    <div style={{ display: "flex", scrollbarWidth: "none", width: "100%" }}>
      {getEventRequest.isLoaded && !getEventRequest.isLoading ? (
        <>
          {width > 800 ? (
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
