import { MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { useIntl } from "react-intl";

export default function MainHomeText({
  isMobile = false,
}: {
  isMobile?: boolean;
}) {
  const intl = useIntl();
  return (
    <div style={{ padding: MySpacing.s5 }}>
      <h1
        style={{
          ...MyTypography.Helvetica22Normal,
          width: isMobile ? "100%" : "60%",
        }}
      >
        {intl.formatMessage({ id: "mainTitle" })}
      </h1>
    </div>
  );
}
