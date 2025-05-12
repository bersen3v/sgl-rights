"use client";
import { MySpacing } from "@/shared/styles";
import useSearch from "./hooks/useSearch";
import SearchPageDesktopView from "./views/searchPageDesktopView";
import SearchPageMobileView from "./views/searchPageMobileView";
import { useWindowSize } from "react-use";
import CustomHeader from "@/shared/widgets/customHeader/customHeader";

export default function SearchPage() {
  const searchController = useSearch();
  const { width } = useWindowSize();

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        padding: 20,
        paddingBottom: 0,
        paddingTop: 0,
        gap: MySpacing.s15,
      }}
    >
      <div style={{ display: "flex", flex: 1 }}>
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
    </div>
  );
}
