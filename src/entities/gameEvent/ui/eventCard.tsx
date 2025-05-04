import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { GameEvent } from "../model/gameEvent";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { CustomButton } from "@/shared/widgets/customButton";
import timestamp2dm from "@/shared/tools/timestamp2dm";
import timestamp2year from "@/shared/tools/timestamp2year";
import { useRouter } from "next/navigation";

export default function EventCard({
  event,
  fullWidth = false,
}: {
  fullWidth?: boolean;
  event: GameEvent;
}) {
  const startTime = new Date(Number(event.startTime) * 1000);
  const endTime = new Date(Number(event.endTime));

  const router = useRouter();

  return (
    <div
      style={{
        width: fullWidth ? "100%" : "32%",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          width: "100%",
          backgroundColor: MyColors.bg2,
          borderRadius: MyBordersRadius.r20,
          padding: MySpacing.s10,
        }}
      >
        <img
          style={{
            width: "100%",
            height: "50%",
            borderRadius: MyBordersRadius.r10,
            objectFit: "cover",
          }}
          src={event.previewPhoto}
          alt={"Превью эвента"}
        />
        <div style={{ padding: MySpacing.s5 }}>
          <h2
            style={{ ...MyTypography.Helvetica19Medium, color: MyColors.white }}
          >
            {event.name}
          </h2>

          <div
            style={{
              paddingTop: MySpacing.s10,
              paddingBottom: MySpacing.s10,
              gap: MySpacing.s5,
            }}
          >
            <h3
              style={{ ...MyTypography.Helvetica15Thin, color: MyColors.white }}
            >
              {event.discipline}
            </h3>
            <h3
              style={{ ...MyTypography.Helvetica15Thin, color: MyColors.white }}
            >
              {timestamp2dm({ timestamp: event.startTime })} -{" "}
              {timestamp2dm({ timestamp: event.endTime })} (
              {timestamp2year({ timestamp: event.endTime })})
            </h3>
          </div>

          <h3
            style={{ ...MyTypography.Helvetica19Medium, color: MyColors.white }}
          >
            {event.prize} $
          </h3>
        </div>
        <CustomButton
          onClick={() => {
            router.push(`/event/${event.id}`);
          }}
          label={"Подробнее"}
        ></CustomButton>
      </div>
    </div>
  );
}
