"use client";
import { MySpacing } from "@/shared/styles";
import CustomBackButton from "@/shared/widgets/customBackButton/customBackButton";

import UserCreateFields from "@/shared/widgets/userCreateFields/userCreateFields";
import { CustomButton } from "@/shared/widgets/customButton";
import useUserCustomInputs from "../../createUser/hook/useUserCustomInputs";
import { User } from "@/entities/user/model/user";

// export type User = {
//   id: string;
//   previewPhoto: string;
//   first_name: string;
//   last_name: string;
//   company: string;
//   mail: string;
//   phone: string;
// };

export default function EditUserPageView({ user }: { user: User }) {
  const userFieldsController = useUserCustomInputs({
    firstNameDef: user.first_name,
    lastNameDef: user.last_name,
    companyDef: user.company,
    mailDef: user.mail,
    phoneDef: user.phone,
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
      <CustomButton onClick={() => {}} label={"Сохранить"}></CustomButton>
    </div>
  );
}
