"use client";
import useSearch from "../hooks/useSearch";
import SearchPageFilters from "../components/searchPageFilters";
import EventsScroll from "@/shared/widgets/eventsScroll/eventsScroll";
import { useState } from "react";
import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import SearchInput from "@/shared/widgets/searchInput/searchInput";
import OpenFiltersButton from "../components/openFitersButton";

export default function SearchPageMobileView({
  searchController,
}: {
  searchController: ReturnType<typeof useSearch>;
}) {
  const [isFilterOpened, setIsFilterOpened] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: MySpacing.s10,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          width: "100%",
        }}
      >
        <SearchInput></SearchInput>
        <OpenFiltersButton
          onClick={() => {
            setIsFilterOpened(!isFilterOpened);
          }}
        ></OpenFiltersButton>
      </div>

      {isFilterOpened ? (
        <div style={{ display: "flex" }}>
          <SearchPageFilters
            isMobileView
            filtersController={searchController.filtersController}
          ></SearchPageFilters>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            overflowY: "auto",
            scrollbarWidth: "none",
            paddingBottom: 0,
          }}
        >
          <EventsScroll
            fullWidth={true}
            events={searchController.events}
          ></EventsScroll>
        </div>
      )}
    </div>
  );
}
