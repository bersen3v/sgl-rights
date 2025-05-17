import { MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";

export default function MainHomeText({
  isMobile = false,
}: {
  isMobile?: boolean;
}) {
  return (
    <div style={{ padding: MySpacing.s5 }}>
      <h1
        style={{
          ...MyTypography.Helvetica22Normal,
          width: isMobile ? "100%" : "60%",
        }}
      >
        Предоставляем доступ к трансляциям спортивных и киберспортивных событий
      </h1>
    </div>
  );
}
