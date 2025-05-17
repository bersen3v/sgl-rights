"use client";
import { useWindowSize } from "react-use";
import { desktopMinWidth } from "@/shared/constants/adaptive";
import DesktopHomeView from "./views/desktopHomeView";
import MobileHomeView from "./views/mobileHomeView";

export default function Home() {
  const { width } = useWindowSize();

  return (
    <div style={{ display: "flex", flex: 1, height: "100%" }}>
      {width > desktopMinWidth ? (
        <DesktopHomeView></DesktopHomeView>
      ) : (
        <MobileHomeView></MobileHomeView>
      )}
    </div>
  );
}
