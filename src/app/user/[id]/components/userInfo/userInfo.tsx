import { User } from "@/entities/user/model/user";
import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { CustomButton } from "@/shared/widgets/customButton";
import { useIntl } from "react-intl";

export default function UserInfo({
  user,
  isMobile = false,
}: {
  user: User;
  isMobile?: boolean;
}) {
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
      }}
    >
      <img
        style={{
          width: isMobile ? "100%" : "30%",
          borderRadius: MyBordersRadius.r10,
          objectFit: "cover",
        }}
        src={user.previewPhoto}
        alt={"Превью юзера"}
      />
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
          <h2 style={{ ...MyTypography.Helvetica14Medium }}>{user.company}</h2>
          <h2 style={{ ...MyTypography.Helvetica14Medium }}>{user.mail}</h2>
          <h2 style={{ ...MyTypography.Helvetica14Medium }}>{user.phone}</h2>
        </div>
      </div>
    </div>
  );
}
