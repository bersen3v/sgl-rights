import { MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { useIntl } from "react-intl";

export default function CustomFooter() {
  const intl = useIntl();
  return (
    <div
      style={{
        display: "flex",
        flexGrow: 0,
        flexDirection: "column",
        padding: MySpacing.s25,
        paddingBottom: MySpacing.s25 * 3,
        paddingTop: MySpacing.s10,
        gap: MySpacing.s25,
      }}
    >
      <div style={{ display: "flex", gap: MySpacing.s25 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: MySpacing.s10,
          }}
        >
          <h3 style={{ ...MyTypography.Helvetica19Medium }}>
            Другие наши проекты
          </h3>
          <div>
            <a
              href={"https://sgl.one"}
              style={{ ...MyTypography.Helvetica16Normal }}
            >
              sgl.one
            </a>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: MySpacing.s10,
          }}
        >
          <h3 style={{ ...MyTypography.Helvetica19Medium }}>
            {intl.formatMessage({ id: "partners" })}
          </h3>
          <div>
            <a
              href={"https://astanahub.com"}
              style={{ ...MyTypography.Helvetica16Normal }}
            >
              astanahub.com
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: MySpacing.s10,
        }}
      >
        <h3 style={{ ...MyTypography.Helvetica19Medium }}>ТОО СГЛ</h3>
        <div>
          <h3 style={{ ...MyTypography.Helvetica16Normal }}>
            Республика Казахстан, г.Алматы, мкрн. Ерменсай, ул. Жангир хана 1,
            индекс 050000
          </h3>
        </div>
      </div>
    </div>
  );
}
