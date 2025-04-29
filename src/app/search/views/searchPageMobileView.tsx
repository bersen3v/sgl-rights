"use client";
import { MySpacing } from "@/shared/styles";

import useSearch from "../hooks/useSearch";
import SearchPageFilters from "../components/searchPageFilters";
import EventsScroll from "@/shared/widgets/eventsScroll/eventsScroll";

export default function SearchPageMobileView({
  searchController,
}: {
  searchController: ReturnType<typeof useSearch>;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SearchPageFilters
        filtersController={searchController.filtersController}
      ></SearchPageFilters>
      <EventsScroll
        fullWidth={true}
        events={searchController.events}
      ></EventsScroll>
      ;
    </div>
  );
}
