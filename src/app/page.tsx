"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import EventCard from "@/entities/gameEvent/ui/eventCard";
import { useMutateRequest } from "@/shared/network/hooks/useMutateRequest";
import { gameEventApiManager } from "@/entities/gameEvent/api/gameEventApiManager";
import { useLayoutEffect, useState } from "react";
import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import SearchIcon from "../../public/icons/search.svg";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import SearchInput from "@/shared/widgets/searchInput/searchInput";

export default function Home() {
  const [events, setEvents] = useState<GameEvent[] | undefined>(undefined);

  const [searchEventsRequest, mutateSearchEventsRequest] = useMutateRequest(
    gameEventApiManager.searchEvents,
    {
      onSuccess: (events: GameEvent[]) => {
        setEvents(events);
      },
      onFail: () => {},
    }
  );

  useLayoutEffect(() => {
    mutateSearchEventsRequest({
      type: "all",
      disciplinesIds: [1, 2],
      managersIds: [1, 2],
      developersIds: [1, 2],
      prizeMinLimit: 1000,
      prizeMaxLimit: 1000000,
      startTime: "1232131423",
      endTime: "3422342342",
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        padding: 20,
        paddingBottom: 0,
        gap: MySpacing.s15,
      }}
    >
      <div
        style={{
          display: "flex",
          width: "25%",
          flexDirection: "column",
          gap: MySpacing.s10,
          position: "sticky",
          top: 10,
          paddingBottom: 20,
        }}
      >
        <SearchInput></SearchInput>
        <div
          style={{
            display: "flex",
            backgroundColor: MyColors.bg2,
            height: "100%",
            width: "100%",
            borderRadius: MyBordersRadius.r20,
          }}
        ></div>
      </div>

      <div
        style={{
          display: "flex",
          width: "75%",
          flexWrap: "wrap",
          gap: MySpacing.s10,
          overflowY: "auto",
          scrollbarWidth: "none",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
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
              <EventCard event={event} key={index}></EventCard>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
