import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";

export default function CustomInput({
  bgColor = MyColors.bg2,
  placeholder = "",
}: {
  placeholder?: string;
  bgColor?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        height: 50,
        width: "100%",
        backgroundColor: bgColor,
        borderRadius: MyBordersRadius.r15,
        padding: MySpacing.s10,
        alignItems: "center",
        paddingLeft: MySpacing.s15,
        gap: MySpacing.s10,
      }}
    >
      <input
        type="number"
        placeholder={placeholder}
        color={MyColors.white}
        style={{
          ...MyTypography.Helvetica14Medium,
          caretColor: MyColors.white,
          color: MyColors.green,
          display: "flex",
          height: "100%",
          width: "100%",
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
        }}
      ></input>
    </div>
  );
}
