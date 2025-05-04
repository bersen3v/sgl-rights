import { MyBordersRadius, MyColors } from "@/shared/styles";
import { Videos } from "next/dist/lib/metadata/types/metadata-types";

export default function OpenFiltersButton({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        height: "100%",
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: MyColors.bg2,
        borderRadius: MyBordersRadius.r15,
      }}
    >
      x
    </div>
  );
}
