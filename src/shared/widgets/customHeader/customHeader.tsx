import { MySpacing } from "@/shared/styles";

import ProfileButton from "./components/profileButton";
import LanguageSelect from "./components/languageSelect";
import { useRouter } from "next/navigation";

export default function CustomHeader({
  locale,
  setLocale,
}: {
  locale: string;
  setLocale: (text: string) => void;
}) {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        flexGrow: 0,
        flexDirection: "row",
        padding: MySpacing.s25,
        paddingBottom: MySpacing.s10,
        paddingTop: MySpacing.s10,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img
        onClick={() => {
          router.push("/");
        }}
        src="/icons/logo.png"
        style={{
          height: 30,
          objectFit: "cover",
        }}
      ></img>

      <div style={{ display: "flex", gap: MySpacing.s10, height: "100%" }}>
        <LanguageSelect locale={locale} setLocale={setLocale}></LanguageSelect>
        <ProfileButton></ProfileButton>
      </div>
    </div>
  );
}
