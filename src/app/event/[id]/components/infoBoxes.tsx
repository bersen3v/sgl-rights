import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import InfoBox from "./infoBox";

export default function InfoBoxes({ event }: { event: GameEvent }) {
  return (
    <>
      <InfoBox header={"Описание"} text={event.description}></InfoBox>
      <InfoBox header={"Организатор"} text={event.manager}></InfoBox>
      <InfoBox header={"Разработчик"} text={event.developer}></InfoBox>
    </>
  );
}
