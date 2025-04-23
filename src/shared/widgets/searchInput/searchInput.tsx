import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import SearchIcon from "../../../../public/icons/search.svg";
export default function SearchInput() {
  return (
    <div
      style={{
        display: "flex",
        height: 50,
        width: "100%",
        backgroundColor: MyColors.bg2,
        borderRadius: MyBordersRadius.r15,
        padding: MySpacing.s10,
        alignItems: "center",
        paddingLeft: MySpacing.s15,
        gap: MySpacing.s10,
      }}
    >
      <input
        placeholder="Поиск"
        color={MyColors.white}
        style={{
          ...MyTypography.Helvetica14Normal,
          caretColor: MyColors.white,
          color: MyColors.white,
          display: "flex",
          height: "100%",
          width: "100%",
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
        }}
      ></input>
      <SearchIcon width={28} height={24}></SearchIcon>
    </div>
  );
}
