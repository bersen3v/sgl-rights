import { MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import CustomInput from "../customInput/customInput";
import useInputControllers from "@/app/adminhome/manageEvents/createEvents/hooks/useInputControllers";
import CustomMultilineInput from "../customMultilineInput/customMultilineInput";

export default function EventEditCreateRows({
  createEditControllers,
}: {
  createEditControllers: ReturnType<typeof useInputControllers>;
}) {
  const Title = ({ title }: { title: string }) => {
    return (
      <h2 style={{ ...MyTypography.Helvetica19Medium, padding: MySpacing.s10 }}>
        {title}
      </h2>
    );
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Название мероприятия"}></Title>
        <CustomInput
          placeholder="RU"
          controller={createEditControllers.nameControllerRu}
        ></CustomInput>
        <CustomInput
          placeholder="EN"
          controller={createEditControllers.nameControllerEn}
        ></CustomInput>
        <CustomInput
          placeholder="KZ"
          controller={createEditControllers.nameControllerKz}
        ></CustomInput>
      </div>

      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Описание мероприятия"}></Title>

        <CustomMultilineInput
          placeholder="RU"
          controller={createEditControllers.descriptionControllerRu}
        ></CustomMultilineInput>
        <CustomMultilineInput
          placeholder="EN"
          controller={createEditControllers.descriptionControllerEn}
        ></CustomMultilineInput>
        <CustomMultilineInput
          placeholder="KZ"
          controller={createEditControllers.descriptionControllerKz}
        ></CustomMultilineInput>
      </div>

      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Организатор мероприятия"}></Title>
        <CustomInput
          placeholder="EN"
          controller={createEditControllers.managerController}
        ></CustomInput>
      </div>

      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Разработчик"}></Title>
        <CustomInput
          placeholder="EN"
          controller={createEditControllers.developerController}
        ></CustomInput>
      </div>

      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Место проведения мероприятия"}></Title>
        <CustomInput
          placeholder="RU"
          controller={createEditControllers.placeControllerRu}
        ></CustomInput>
        <CustomInput
          placeholder="EN"
          controller={createEditControllers.placeControllerEn}
        ></CustomInput>
        <CustomInput
          placeholder="KZ"
          controller={createEditControllers.placeControllerKz}
        ></CustomInput>
      </div>
      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Дисциплина"}></Title>
        <CustomInput
          placeholder="EN"
          controller={createEditControllers.disciplineController}
        ></CustomInput>
      </div>
      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Сумма выигрыша"}></Title>
        <CustomInput
          type="number"
          placeholder="USD"
          controller={createEditControllers.prizeController}
        ></CustomInput>
      </div>

      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Даты начала и конца события"}></Title>
        <CustomInput
          type="date"
          controller={createEditControllers.startDateInputController}
        ></CustomInput>

        <CustomInput
          type="date"
          controller={createEditControllers.endtDateInputController}
        ></CustomInput>
      </div>
    </>
  );
}
