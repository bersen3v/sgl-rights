import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import CustomInput from "../../customInput/customInput";
import { useIntl } from "react-intl";

export default function PriceFilter() {
  const intl = useIntl();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomInput
          bgColor={MyColors.bg3}
          placeholder={intl.formatMessage({ id: "from" })}
        ></CustomInput>
        <div
          style={{
            display: "flex",
            backgroundColor: MyColors.grey,
            width: 30,
            height: 2,
            margin: MySpacing.s5,
            borderRadius: MyBordersRadius.r30,
          }}
        ></div>
        <CustomInput
          bgColor={MyColors.bg3}
          placeholder={intl.formatMessage({ id: "before" })}
        ></CustomInput>
      </div>
    </>
  );
}
