import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import ProfileIcon from "../../../../public/icons/profile.svg";

export default function CustomHeader() {
  return (
    <div
      style={{
        display: "flex",
        flexGrow: 0,
        flexDirection: "row",
        padding: MySpacing.s15,
        paddingBottom: 0,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img
        src="/icons/logo.png"
        style={{
          height: 30,
          objectFit: "cover",
        }}
      ></img>

      <div style={{ display: "flex", gap: MySpacing.s10, height: "100%" }}>
        <div
          style={{
            display: "flex",
            height: "100%",
            backgroundColor: MyColors.bg2,
            padding: MySpacing.s10,
            borderRadius: MyBordersRadius.r10,
          }}
        >
          ru
        </div>
        <div
          style={{
            display: "flex",
            height: "100%",
            backgroundColor: MyColors.bg2,
            padding: MySpacing.s10,
            borderRadius: MyBordersRadius.r10,
          }}
        >
          <ProfileIcon></ProfileIcon>
        </div>
      </div>
    </div>
  );
}
