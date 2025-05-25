import useCustomInputController from "@/shared/widgets/customInput/hooks/customInputController";
import { useState } from "react";

export default function useInputControllers({
  photoUrlDef = "",
  startTimeDef = 0,
  endTimeDef = 0,
  nameRuDef = "",
  nameEnDef = "",
  nameKzDef = "",
  descriptionRuDef = "",
  descriptionEnDef = "",
  descriptionKzDef = "",
  managerDef = "",
  developerDef = "",
  placeRuDef = "",
  placeEnDef = "",
  placeKzDef = "",
  disciplineDef = "",
  prizeDef = "",
}: {
  photoUrlDef?: string;
  startTimeDef?: number;
  endTimeDef?: number;
  nameRuDef?: string;
  nameEnDef?: string;
  nameKzDef?: string;
  descriptionRuDef?: string;
  descriptionEnDef?: string;
  descriptionKzDef?: string;
  managerDef?: string;
  developerDef?: string;
  placeRuDef?: string;
  placeEnDef?: string;
  placeKzDef?: string;
  disciplineDef?: string;
  prizeDef?: string;
}) {
  const [photoUrl, setPhotoUrl] = useState(photoUrlDef);
  const [startTime, setStartTime] = useState<number>(startTimeDef);
  const [endTime, setEndTime] = useState<number>(endTimeDef);

  const nameControllerRu = useCustomInputController(nameRuDef);
  const nameControllerEn = useCustomInputController(nameEnDef);
  const nameControllerKz = useCustomInputController(nameKzDef);

  const descriptionControllerRu = useCustomInputController(descriptionRuDef);
  const descriptionControllerEn = useCustomInputController(descriptionEnDef);
  const descriptionControllerKz = useCustomInputController(descriptionKzDef);

  const managerController = useCustomInputController(managerDef);
  const developerController = useCustomInputController(developerDef);

  const placeControllerRu = useCustomInputController(placeRuDef);
  const placeControllerEn = useCustomInputController(placeEnDef);
  const placeControllerKz = useCustomInputController(placeKzDef);

  const disciplineController = useCustomInputController(disciplineDef);
  const prizeController = useCustomInputController(prizeDef);

  const startDateInputController = useCustomInputController(
    startTimeDef.toString()
  );
  const endtDateInputController = useCustomInputController(
    endTimeDef.toString()
  );

  return {
    photoUrl,
    setPhotoUrl,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    nameControllerRu,
    nameControllerEn,
    nameControllerKz,
    descriptionControllerEn,
    descriptionControllerRu,
    descriptionControllerKz,
    managerController,
    developerController,
    placeControllerRu,
    placeControllerEn,
    placeControllerKz,
    disciplineController,
    prizeController,
    startDateInputController,
    endtDateInputController,
  };
}
