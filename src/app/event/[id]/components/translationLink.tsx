import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import timestamp2dm from "@/shared/tools/timestamp2dm";
import timestamp2year from "@/shared/tools/timestamp2year";
import { CustomButton } from "@/shared/widgets/customButton";

export default function TranslationLink({ event }: { event: GameEvent }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: MySpacing.s10,
        backgroundColor: MyColors.bg2,
        borderRadius: MyBordersRadius.r20,
        gap: MySpacing.s10,
        paddingTop: MySpacing.s15,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: MySpacing.s5,
        }}
      >
        <h4 style={{ ...MyTypography.Helvetica19Medium }}>
          Ссылка на трансляцию
        </h4>
      </div>
      <CustomButton onClick={() => {}} label={"Скопировать"}></CustomButton>
    </div>
  );
}
