import { CustomButton } from "@/shared/widgets/customButton";
import { useRouter } from "next/navigation";

export default function HomeSearchButton({
  isMobile = false,
}: {
  isMobile?: boolean;
}) {
  const router = useRouter();
  return (
    <div style={{ width: isMobile ? "100%" : "40%" }}>
      <CustomButton
        onClick={() => {
          router.push("/search");
        }}
        label={"Бронирование событий"}
      ></CustomButton>
    </div>
  );
}
