"use client";
import { MySpacing } from "@/shared/styles";
import useSearch from "./hooks/useSearch";
import SearchPageDesktopView from "./views/searchPageDesktopView";
import SearchPageMobileView from "./views/searchPageMobileView";

export default function SearchPage() {
  const searchController = useSearch();

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
      {window.innerWidth > 800 ? (
        <SearchPageDesktopView
          searchController={searchController}
        ></SearchPageDesktopView>
      ) : (
        <SearchPageMobileView
          searchController={searchController}
        ></SearchPageMobileView>
      )}
    </div>
  );
}
