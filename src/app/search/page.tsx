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
        overflow: "hidden",
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        padding: 20,
        paddingBottom: 0,
        paddingTop: 0,
        gap: MySpacing.s15,
      }}
    >
      <div style={{ flexGrow: 0 }}>
        <CustomHeader></CustomHeader>
      </div>
      <div style={{ flexGrow: 1, display: "flex" }}>
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
