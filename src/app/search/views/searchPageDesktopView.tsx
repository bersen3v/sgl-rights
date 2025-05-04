"use client";
import { MySpacing } from "@/shared/styles";

import useSearch from "../hooks/useSearch";
import SearchPageFilters from "../components/searchPageFilters";
import EventsScroll from "@/shared/widgets/eventsScroll/eventsScroll";
import SearchInput from "@/shared/widgets/searchInput/searchInput";

export default function SearchPageDesktopView({
  searchController,
}: {
  searchController: ReturnType<typeof useSearch>;
}) {
  return (
    <>
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
        <SearchPageFilters
          filtersController={searchController.filtersController}
        ></SearchPageFilters>
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
        <EventsScroll events={searchController.events}></EventsScroll>;
      </div>
    </>
  );
}
