import { MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import CustomInput from "../customInput/customInput";
import useUserCustomInputs from "@/app/adminhome/manageUsers/createUser/hook/useUserCustomInputs";

export default function UserCreateFields({
  userFieldsController,
}: {
  userFieldsController: ReturnType<typeof useUserCustomInputs>;
}) {
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
        flexDirection: "column",
        gap: MySpacing.s25,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Имя и фамилия"}></Title>

        <CustomInput
          placeholder="Имя"
          controller={userFieldsController.firstNameController}
        ></CustomInput>
        <CustomInput
          placeholder="Фамилия"
          controller={userFieldsController.lastNameController}
        ></CustomInput>
      </div>

      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Компания"}></Title>
        <CustomInput
          placeholder="Компания"
          controller={userFieldsController.companyController}
        ></CustomInput>
      </div>

      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
        }}
      >
        <Title title={"Контакты"}></Title>
        <CustomInput
          placeholder="Почта"
          controller={userFieldsController.mailController}
        ></CustomInput>
        <CustomInput
          placeholder="Телефон"
          controller={userFieldsController.phoneController}
        ></CustomInput>
      </div>
    </div>
  );
}
