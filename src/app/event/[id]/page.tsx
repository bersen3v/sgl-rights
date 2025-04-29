import { MyColors } from "@/shared/styles";
import InfoBox from "./components/infoBox";
import useRequest from "@/shared/network/hooks/useRequest";
import { gameEventApiManager } from "@/entities/gameEvent/api/gameEventApiManager";
import EventPageView from "./eventPageView";

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const eventId = Number((await params).id);

  return <EventPageView eventId={eventId}></EventPageView>;
}
