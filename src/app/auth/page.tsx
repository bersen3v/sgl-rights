"use client";
import { MySpacing } from "@/shared/styles";
import { CustomButton } from "@/shared/widgets/customButton";
import CustomInput from "@/shared/widgets/customInput/customInput";

export default function AuthPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
          margin: "auto", // это центрирует содержимое
        }}
      >
        <CustomInput></CustomInput>
        <CustomInput></CustomInput>
        <CustomButton onClick={() => {}} label={"Войти"}></CustomButton>
      </div>
    </div>
  );
}
