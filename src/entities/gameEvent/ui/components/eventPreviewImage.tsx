import { MyBordersRadius } from "@/shared/styles";
import { GameEvent } from "../../model/gameEvent";

export default function EventPreviewImage({ event }: { event: GameEvent }) {
  return (
    <img
      style={{
        width: "100%",
        height: "50%",
        borderRadius: MyBordersRadius.r10,
        objectFit: "cover",
      }}
      src={`http://localhost:8090/getPhoto?id=${event.previewPhoto}`}
      alt={"Превью эвента"}
    />
  );
}
