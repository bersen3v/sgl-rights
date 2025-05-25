"use client";
import { MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { CustomButton } from "@/shared/widgets/customButton";
import { useMutateRequest } from "@/shared/network/hooks/useMutateRequest";
import { gameEventApiManager } from "@/entities/gameEvent/api/gameEventApiManager";
import { CreateEventParams } from "@/entities/gameEvent/api/methods/create/createEvent";

import EventEditCreateRows from "@/shared/widgets/eventEditCreateRows/eventEditCreateRows";
import useInputControllers from "./hooks/useInputControllers";
import CustomBackButton from "@/shared/widgets/customBackButton/customBackButton";

export default function CreateEventsPage() {
  const [createEventRequest, mutateCreateEventRequest] = useMutateRequest<
    boolean,
    CreateEventParams
  >(gameEventApiManager.createEvent, {
    onSuccess: () => {},
    onFail: () => {},
  });

  const createEditControllers = useInputControllers({
    photoUrlDef: "",
    startTimeDef: 0,
    endTimeDef: 0,
    nameRuDef: "",
    nameEnDef: "",
    nameKzDef: "",
    descriptionRuDef: "",
    descriptionEnDef: "",
    descriptionKzDef: "",
    managerDef: "",
    developerDef: "",
    placeRuDef: "",
    placeEnDef: "",
    placeKzDef: "",
    disciplineDef: "",
    prizeDef: "",
  });

  const Title = ({ title }: { title: string }) => {
    return (
      <h2 style={{ ...MyTypography.Helvetica19Medium, padding: MySpacing.s10 }}>
        {title}
      </h2>
    );
  };

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
          mutateCreateEventRequest({
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
