import { User } from "@/entities/user/model/user";
import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { CustomButton } from "@/shared/widgets/customButton";
import { useRouter } from "next/navigation";
import { useIntl } from "react-intl";

export default function UserInfo({
  user,
  isMobile = false,
  maxHeight = undefined,
  isAdmin = false,
}: {
  user: User;
  isMobile?: boolean;
  maxHeight?: number;
  isAdmin?: boolean;
}) {
  const router = useRouter();
  const intl = useIntl();
  return (
    <div
      style={{
        backgroundColor: MyColors.bg2,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        padding: MySpacing.s10,
        borderRadius: MyBordersRadius.r20,
        gap: MySpacing.s15,
        maxHeight: maxHeight,
      }}
    >
      {!isAdmin && (
        <img
          style={{
            // height: isAdmin ? "100%" : "auto",
            width: isMobile ? "100%" : "30%",
            borderRadius: MyBordersRadius.r10,
            objectFit: "cover",
          }}
          src={user.previewPhoto}
          alt={"Превью юзера"}
        />
      )}

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: MySpacing.s10,
            gap: MySpacing.s10,
          }}
        >
          <h2 style={{ ...MyTypography.Helvetica19Medium }}>
            {user.first_name} {user.last_name}
          </h2>
          <div
            style={{
              display: "flex",
              gap: MySpacing.s5,
              flexDirection: "column",
            }}
          >
            {isAdmin && (
              <h2 style={{ ...MyTypography.Helvetica14Medium }}>
                id: {user.id}
              </h2>
            )}

            <h2 style={{ ...MyTypography.Helvetica14Medium }}>
              {user.company}
            </h2>
            <h2 style={{ ...MyTypography.Helvetica14Medium }}>{user.mail}</h2>
            <h2 style={{ ...MyTypography.Helvetica14Medium }}>{user.phone}</h2>
          </div>
        </div>
        {isAdmin && (
          <div
            style={{
              display: "flex",
              gap: MySpacing.s5,
              flexDirection: "column",
            }}
          >
            <CustomButton
              onClick={() => {
                router.push(`/user/${user.id}`);
              }}
              label={"Открыть"}
            ></CustomButton>
            <CustomButton
              onClick={() => {
                router.push(`/adminhome/manageUsers/editUser/${user.id}`);
              }}
              label={"Редактировать"}
            ></CustomButton>
            <CustomButton onClick={() => {}} label={"Удалить"}></CustomButton>
          </div>
        )}
      </div>
    </div>
  );
}
