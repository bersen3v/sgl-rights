import { OptionsType } from "@/shared/widgets/customSelect/customSelect";

export type Filters = {
  viewMode: OptionsType;
  managers: OptionsType;
  disciplines: OptionsType;
  developers: OptionsType;
};

export const InitFilters = {
  viewMode: [],
  managers: [],
  disciplines: [],
  developers: [],
};

export const InitViewModeFilter = {
  label: "Все",
  value: 1,
};
