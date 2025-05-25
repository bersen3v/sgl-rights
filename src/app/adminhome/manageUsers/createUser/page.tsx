"use client";
import { MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import CustomBackButton from "@/shared/widgets/customBackButton/customBackButton";
import CustomInput from "@/shared/widgets/customInput/customInput";
import useCustomInputController from "@/shared/widgets/customInput/hooks/customInputController";
import useUserCustomInputs from "./hook/useUserCustomInputs";
import UserCreateFields from "@/shared/widgets/userCreateFields/userCreateFields";
import { CustomButton } from "@/shared/widgets/customButton";

// export type User = {
//   id: string;
//   previewPhoto: string;
//   first_name: string;
//   last_name: string;
//   company: string;
//   mail: string;
//   phone: string;
// };

export default function CreateUserPage() {
  const userFieldsController = useUserCustomInputs({
    firstNameDef: "",
    lastNameDef: "",
    companyDef: "",
    mailDef: "",
    phoneDef: "",
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
      <UserCreateFields
        userFieldsController={userFieldsController}
      ></UserCreateFields>
      <CustomButton onClick={() => {}} label={"Создать"}></CustomButton>
    </div>
  );
}
