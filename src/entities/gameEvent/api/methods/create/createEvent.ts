import { baseUrl } from "@/shared/network/config/baseUrl";

export type CreateEventParams = {
  photoUrl: string;
  startTime: number;
  endTime: number;
  nameRu: string;
  nameEn: string;
  nameKz: string;
  descriptionRu: string;
  descriptionEn: string;
  descriptionKz: string;
  manager: string;
  developer: string;
  placeRu: string;
  placeEn: string;
  placeKz: string;
  discipline: string;
  prize: string;
};

export default async function createEvent(
  createEventParams: CreateEventParams
): Promise<boolean> {
  const path = baseUrl + "/createEvent";

  const data = {
    result: true,
  };

  return (
    data as {
      result: boolean;
    }
  ).result;
}
