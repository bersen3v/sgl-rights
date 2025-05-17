import { MyBordersRadius } from "@/shared/styles";

export default function Player({
  name,
  role,
  url,
}: {
  name: string;
  role: string;
  url: string;
}) {
  return (
    <div>
      <img
        style={{
          width: "100%",
          borderRadius: MyBordersRadius.r20,
          objectFit: "cover",
        }}
        src={url}
        alt={"фото эвента"}
      />

      <h1>{name}</h1>
      <h1>{role}</h1>
    </div>
  );
}
