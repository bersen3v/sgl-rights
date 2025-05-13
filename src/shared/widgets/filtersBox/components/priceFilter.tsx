import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import CustomInput from "../../customInput/customInput";
import { useIntl } from "react-intl";
import useCustomInputController from "../../customInput/hooks/customInputController";

export default function PriceFilter() {
  const intl = useIntl();
  const fromController = useCustomInputController();
  const beforeController = useCustomInputController();

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
          controller={fromController}
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
          controller={beforeController}
        ></CustomInput>
      </div>
    </>
  );
}
