import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { InitViewModeFilter } from "@/entities/filters/model/filters";
import SearchInput from "../searchInput/searchInput";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import CustomSelect from "../customSelect/customSelect";
import CustomInput from "../customInput/customInput";
import useCustomFilters from "./hooks/useCustomFilters";

export default function FiltersBox({
  filtersController,
  isMobileView = false,
}: {
  filtersController: ReturnType<typeof useCustomFilters>;
  isMobileView?: boolean;
}) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: MySpacing.s10,
          backgroundColor: MyColors.bg2,
          borderRadius: MyBordersRadius.r20,
          gap: MySpacing.s10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: MySpacing.s5,
          }}
        >
          <h3
            style={{
              ...MyTypography.Helvetica14Medium,
              color: MyColors.grey,
            }}
          >
            Фильтры
          </h3>
          <h3
            onClick={() => {
              filtersController.clear();
            }}
            style={{
              ...MyTypography.Helvetica14Medium,
              color: MyColors.grey,
            }}
          >
            Сбросить
          </h3>
        </div>
        <CustomSelect
          placeholder={"Вид"}
          isMulti={false}
          customSelectController={filtersController.viewModeController}
          defaultValue={InitViewModeFilter}
        ></CustomSelect>
        <CustomSelect
          placeholder={"Дисциплина"}
          customSelectController={filtersController.disciplinesController}
        ></CustomSelect>
        <CustomSelect
          placeholder={"Организатор"}
          customSelectController={filtersController.managersController}
        ></CustomSelect>
        <CustomSelect
          placeholder={"Разработчик"}
          customSelectController={filtersController.developersController}
        ></CustomSelect>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CustomInput bgColor={MyColors.bg3} placeholder="От"></CustomInput>
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
          <CustomInput bgColor={MyColors.bg3} placeholder="До"></CustomInput>
        </div>
      </div>
    </>
  );
}
