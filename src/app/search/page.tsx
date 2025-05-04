"use client";
import { MySpacing } from "@/shared/styles";
import useSearch from "./hooks/useSearch";
import SearchPageDesktopView from "./views/searchPageDesktopView";
import SearchPageMobileView from "./views/searchPageMobileView";
import { useWindowSize } from "react-use";

export default function SearchPage() {
  const searchController = useSearch();
  const { width } = useWindowSize();

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
      {width > 800 ? (
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
