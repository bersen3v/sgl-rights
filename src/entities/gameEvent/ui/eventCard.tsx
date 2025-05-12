import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { GameEvent } from "../model/gameEvent";
import { CustomButton } from "@/shared/widgets/customButton";
import { useRouter } from "next/navigation";
import { useIntl } from "react-intl";
import EventCardText from "./components/eventCardText";
import EventPreviewImage from "./components/eventPreviewImage";

export default function EventCard({
  event,
  fullWidth = false,
}: {
  fullWidth?: boolean;
  event: GameEvent;
}) {
  const router = useRouter();
  const intl = useIntl();

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
        <EventPreviewImage event={event}></EventPreviewImage>
        <EventCardText event={event}></EventCardText>
        <CustomButton
          onClick={() => {
            router.push(`/event/${event.id}`);
          }}
          label={intl.formatMessage({ id: "more" })}
        ></CustomButton>
      </div>
    </div>
  );
}
