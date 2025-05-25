"use client";
import { MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import CustomInput from "@/shared/widgets/customInput/customInput";
import { CustomButton } from "@/shared/widgets/customButton";
import { useMutateRequest } from "@/shared/network/hooks/useMutateRequest";
import { gameEventApiManager } from "@/entities/gameEvent/api/gameEventApiManager";

import { EditEventParams } from "@/entities/gameEvent/api/methods/edit/editEvent";
import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import EventEditCreateRows from "@/shared/widgets/eventEditCreateRows/eventEditCreateRows";
import useInputControllers from "../../createEvents/hooks/useInputControllers";
import CustomBackButton from "@/shared/widgets/customBackButton/customBackButton";

export default function EditEventsPageView({ event }: { event: GameEvent }) {
  const [editEventRequest, mutateEditEventRequest] = useMutateRequest<
    boolean,
    EditEventParams
  >(gameEventApiManager.editEvent, {
    onSuccess: () => {},
    onFail: () => {},
  });

  const createEditControllers = useInputControllers({
    photoUrlDef: event.previewPhoto,
    startTimeDef: 0,
    endTimeDef: 0,
    nameRuDef: event.name.ru,
    nameEnDef: event.name.en,
    nameKzDef: event.name.kk,
    descriptionRuDef: event.description.ru,
    descriptionEnDef: event.description.en,
    descriptionKzDef: event.description.kk,
    managerDef: event.manager,
    developerDef: event.developer,
    placeRuDef: event.place.ru,
    placeEnDef: event.place.en,
    placeKzDef: event.place.kk,
    disciplineDef: event.discipline,
    prizeDef: event.prize.toString(),
  });

  return (
    <div
      style={{
        display: "flex",
        padding: MySpacing.s25,
        paddingTop: 0,
        flexDirection: "column",
        gap: MySpacing.s25,
        width: "50%",
      }}
    >
      <CustomBackButton></CustomBackButton>
      <EventEditCreateRows
        createEditControllers={createEditControllers}
      ></EventEditCreateRows>

      <CustomButton
        onClick={() => {
          mutateEditEventRequest({
            id: event.id,
            photoUrl: createEditControllers.photoUrl,
            startTime: 0,
            endTime: 0,
            nameRu: createEditControllers.nameControllerRu.value,
            nameEn: createEditControllers.nameControllerEn.value,
            nameKz: createEditControllers.nameControllerKz.value,
            descriptionRu: createEditControllers.descriptionControllerRu.value,
            descriptionEn: createEditControllers.descriptionControllerEn.value,
            descriptionKz: createEditControllers.descriptionControllerKz.value,
            manager: createEditControllers.managerController.value,
            developer: createEditControllers.developerController.value,
            placeRu: createEditControllers.placeControllerRu.value,
            placeEn: createEditControllers.placeControllerEn.value,
            placeKz: createEditControllers.placeControllerKz.value,
            discipline: createEditControllers.disciplineController.value,
            prize: createEditControllers.prizeController.value,
          });
        }}
        label={"Создать"}
      ></CustomButton>
    </div>
  );
}
