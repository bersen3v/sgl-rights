import { CustomButton } from "@/shared/widgets/customButton";
import { useRouter } from "next/navigation";
import { useIntl } from "react-intl";

export default function HomeSearchButton({
  isMobile = false,
  messageId,
}: {
  isMobile?: boolean;
  messageId: string;
}) {
  const intl = useIntl();
  const router = useRouter();
  return (
    <div style={{ width: isMobile ? "100%" : "40%" }}>
      <CustomButton
        onClick={() => {
          router.push("/search");
        }}
        label={intl.formatMessage({ id: messageId })}
      ></CustomButton>
    </div>
  );
}
