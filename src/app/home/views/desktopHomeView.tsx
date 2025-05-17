import { MySpacing } from "@/shared/styles";
import MainHomeText from "../components/mainHomeText";
import HomeSearchButton from "../components/homeSearchButton";
import Players from "../components/players";

export default function DesktopHomeView() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        padding: MySpacing.s25,
        flexDirection: "column",
      }}
    >
      <div
        style={{ display: "flex", gap: MySpacing.s15, flexDirection: "column" }}
      >
        <MainHomeText></MainHomeText>
        <HomeSearchButton></HomeSearchButton>
      </div>
      <Players></Players>
    </div>
  );
}
