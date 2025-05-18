import { MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";

export default function CustomFooter() {
  return (
    <div
      style={{
        display: "flex",
        flexGrow: 0,
        flexDirection: "column",
        padding: MySpacing.s25,
        paddingBottom: MySpacing.s10,
        paddingTop: MySpacing.s10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ ...MyTypography.Helvetica14Medium }}>ТОО СГЛ</h1>
      <img
        style={{
          width: "100%",

          objectFit: "cover",
        }}
        src={
          "https://sun9-53.userapi.com/impg/d4RLvwUv9ktBUkVxHIitiDyqnWouQhUxWA3Ghw/oG-2dWMMW9U.jpg?size=1280x269&quality=95&sign=df52e8f8c8f5790ad752e4c8e443ef3e&type=album"
        }
        alt={"фото эвента"}
      />
    </div>
  );
}
